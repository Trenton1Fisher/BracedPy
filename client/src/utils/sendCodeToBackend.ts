type codeResponse = {
  success: boolean
  output?: string
}

export async function sendCodeToBackend(code: string) {
  try {
    const response = await fetch('api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
    if (!response.ok) {
      throw new Error('Failed to send code')
    }
    const data: codeResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error sending code to backend:', error)
    throw error
  }
}
