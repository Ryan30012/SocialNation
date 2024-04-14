import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const filePath = path.join(process.cwd(), 'app', 'storage', 'currentUser.json');
        
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        
        const data = JSON.parse(jsonContent);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to read the chat data.' });
      }
}

export function POST(req:NextApiRequest, res:NextApiResponse) {
    
    const filePath = path.join(process.cwd(), 'app', 'storage', 'currentUser.json');

    const user = req.body
    
    fs.writeFile(filePath, JSON.stringify(user, null, 2), (err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to write the data.' });
        } else {
            res.status(200).json({ message: 'Data added successfully', data: user });
        }
    });
}