import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'


type SheetForm = {
    name:string
    email:string
    phone:string
    message:string
    id:string
}

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        return res.status( 405).send({message:'solo post request'})
    }
    const body = req.body as SheetForm

    try{
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
                private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })
        console.log(req.body)
        const sheets = google.sheets({
            auth, 
            version:'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: body.id,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                
                values: [
                    [body.name, body.email, body.phone, body.message]
                ]
            }

        })

        return res.status(201).json({
            data: response.data
        })

    }catch(e){
        return res.status(e.code).send({message: e.message})
    }

}