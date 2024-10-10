
type codeResponse = {
  success: boolean
  output?: string
  error?: string
}

export async function sendCodeToBackend(code: string) {
  try {
    const response = await fetch('https://api.braced.trentonfisher.xyz/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
    if (!response.ok) {
      const errorData: codeResponse = await response.json();
      console.error('Error from backend:', errorData.error || 'Unknown error');
      return errorData
    }
    const data: codeResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error sending code to backend:', error)
    throw error
  }
}
