'use server'
import path from "path";
import fs from "fs"
import { log } from "console";

type Data = {
    // Define the structure of the data in your JSON file
    key: string;
    value: any;
};

export async function writeCurrUser (user:any) {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'curUser.json');
    const jsonData = fs.writeFileSync(filePath, user, 'utf8');
    console.log(user);
}

export async function getUsers() {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'listUsers.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data: Data[] = JSON.parse(jsonData);
    console.log(data);
    return data
}

export async function getCurrUser() {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'curUser.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = jsonData;
    console.log(data);
    return data
}

export async function getMsgs() {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'msgs.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data: Data[] = JSON.parse(jsonData);
    console.log(data);
    return data
}

export async function writeUserRequest (user:any) {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'curUser.json');
    const jsonData = fs.writeFileSync(filePath, 'utf8');
    const data: Data[] = JSON.parse(user);
}

export async function getUserRequest() {
    const filePath = path.join(process.cwd(), 'app', 'storage', 'userRequests.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data: Data[] = JSON.parse(jsonData);
    console.log(data);
    return data
}