// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

const filePath = path.join(process.cwd(), 'app', 'storage', 'listUsers.json');

async function handleGetRequest(res: NextApiResponse) {
    try {
        console.log(1);
        const jsonContent = await fsPromises.readFile(filePath, 'utf8');
        console.log(2);
        const data = JSON.parse(jsonContent);
        res.status(200).json(data);
    } catch (error) {
        console.log(3);
        res.status(500).json({ error: 'Failed to read the data.' });
    }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        const existingData = JSON.parse(data);
        const newUser = req.body;
        existingData.push(newUser);
        await fsPromises.writeFile(filePath, JSON.stringify(existingData, null, 2));
        res.status(200).json({ message: 'Data added successfully', data: existingData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to write the data.' });
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            await handleGetRequest(res);
            break;
        case 'POST':
            await handlePostRequest(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}