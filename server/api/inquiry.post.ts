type InquiryPayload = {
  name?: string
  email?: string
  whatsapp?: string
  interest?: string
  dates?: string
  groupSize?: string
  message?: string
}

const clean = (value: unknown) => String(value || '').trim().slice(0, 1000)

const defaultWebhookUrl = [
  'https://discord.com/api/webhooks',
  '1540967850846715914',
  'dI8H9-EyEI-u10lls2DVkzD8MRBWhjJACr1SjLSTXZAU6Fmq_ArZYLPtDQjbswBXI6b-'
].join('/')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const webhookUrl = config.discordWebhookUrl || defaultWebhookUrl

  if (!webhookUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Inquiry notifications are not configured.'
    })
  }

  const body = await readBody<InquiryPayload>(event)
  const inquiry = {
    name: clean(body.name),
    email: clean(body.email),
    whatsapp: clean(body.whatsapp),
    interest: clean(body.interest),
    dates: clean(body.dates) || 'Flexible',
    groupSize: clean(body.groupSize) || 'Not specified',
    message: clean(body.message) || 'No extra message provided.'
  }

  if (!inquiry.name || !inquiry.interest || (!inquiry.email && !inquiry.whatsapp)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email or WhatsApp, and interest are required.'
    })
  }

  await $fetch(webhookUrl, {
    method: 'POST',
    body: {
      username: 'LAKU Website',
      embeds: [
        {
          title: 'New LAKU inquiry',
          color: 0xc99342,
          fields: [
            { name: 'Name', value: inquiry.name, inline: true },
            { name: 'Email', value: inquiry.email || 'Not provided', inline: true },
            { name: 'WhatsApp', value: inquiry.whatsapp || 'Not provided', inline: true },
            { name: 'Interest', value: inquiry.interest, inline: false },
            { name: 'Preferred dates', value: inquiry.dates, inline: true },
            { name: 'Group size', value: inquiry.groupSize, inline: true },
            { name: 'Message', value: inquiry.message, inline: false }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    }
  })

  return { ok: true }
})
