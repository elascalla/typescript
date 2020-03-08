import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Erick', email: 'erick.lascalla@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Erick Lascalla', 
        email: 'erick.lascalla@gmail.com' 
      },
      message: { 
        subject: 'Bem vindo ao sistema', 
        body: 'Seja bem vindo' 
      }
    });

    return res.json();
  }
};