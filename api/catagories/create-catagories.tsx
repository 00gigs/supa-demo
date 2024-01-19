import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "../../lib/supabase";

interface Category {
    name: string;
    description: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const newCategory: Category = { name: 'New Category', description: 'This is a new category', };
            const { data, error } = await supabase
                .from('categories')
                .insert(newCategory);

            if (data) {
                res.status(201).json({ message: 'failed' })
            } else {
                res.status(500).json({ message: 'failed' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}




