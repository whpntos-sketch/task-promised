const API_URL = "https://script.google.com/macros/s/AKfycbw2jT669k4wbdLK1gOtKRIW0Ui20MWcJ8bAbfrbR_d9J3CZZ9wNBI6z0doywTQLxtzY/exec";

/**
 * Kirim data ke Google Apps Script API
 * @param {Object} payload - data yang akan dikirim
 * @returns {Promise<Object>} - hasil JSON dari server
 */
export async function api(payload) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    return { success: false, error: error.message };
  }
}
