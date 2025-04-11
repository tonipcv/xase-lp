export interface LeadData {
  name: string;
  whatsapp: string;
  email: string;
  segment?: string;
  budget?: string;
}

export async function createLead(data: LeadData) {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating lead:', error);
    throw error;
  }
} 