import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function createUser(req: Request, res: Response) {
    try {
        console.log(req.body)
        
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: { name, email }
        });

        return res.status(201).json(user);
    } catch (error) {
    console.error(error);
    return res.status(500).json(error);
}
    // catch (error) {
    //     return res.status(400).json({ error: 'Error creating user'});
    // }
}

export async function getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json(users);
}