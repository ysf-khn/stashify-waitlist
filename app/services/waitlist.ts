interface WaitlistData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
}

interface WaitlistResponse {
  success: boolean;
  message: string;
}

export async function saveToWaitlist(
  data: WaitlistData
): Promise<WaitlistResponse> {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to join waitlist");
    }

    return result;
  } catch (error) {
    console.error("Waitlist service error:", error);
    throw error;
  }
}
