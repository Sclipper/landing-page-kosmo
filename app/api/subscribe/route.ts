import type { NextApiResponse } from 'next'
import mailchimp from '@mailchimp/mailchimp_marketing'
import { NextResponse } from 'next/server'

const API_KEY = process.env.NEXT_EMAIL_KEY!
const mailchimpClient = require('@mailchimp/mailchimp_transactional')(
  '7395f7f95d63a982c78fccb58396762d-us12'
)

const LIST_ID = process.env.NEXT_AUDIENCE_ID!
const DATACENTER = API_KEY?.split('-')?.[1]

mailchimp.setConfig({
  apiKey: API_KEY,
  server: DATACENTER,
})

export async function POST(req: Request, res: NextApiResponse) {
  const data = await req.json()

  const { email, firstName, lastName, jobTitle, companyWebsite, companySize } = data
  try {
    const response = await mailchimp.lists.addListMember(LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        WEBSITE: companyWebsite,
        POSITION: jobTitle,
        CSIZE: companySize,
      },
    })

    const welcomeMessage = await mailchimpClient.messages.sendTemplate({
      template_name: 'Welcome mail',
      template_content: [{}],
      message: {},
    })
    console.log('welcomeMessage', welcomeMessage)
    return NextResponse.json(response)
  } catch (error: any) {
    console.log('error.response.text.title', error)
    if (error?.response?.body?.title === 'Member Exists') {
      return NextResponse.json({ message: 'You are already subscribed' })
    }
    return res.status(500).json({ message: error.message })
  }
}

export const dynamic = 'force-static'
