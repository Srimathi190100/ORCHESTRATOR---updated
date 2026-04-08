/**
 * Simulated external tools for the AI Orchestrator.
 */

export const tools = {
  /**
   * Fetches weather information for a given location and date.
   */
  getWeather: async (location: string, date: string) => {
    console.log(`[Tool] Fetching weather for ${location} on ${date}...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Deterministic simulation based on input
    const isRainy = location.toLowerCase().includes('rain') || date.includes('tomorrow');
    return {
      location,
      date,
      condition: isRainy ? 'Rainy' : 'Sunny',
      temperature: isRainy ? 18 : 24,
      unit: 'Celsius'
    };
  },

  /**
   * Simulated task storage.
   */
  saveTask: async (task: { title: string; priority: string }) => {
    console.log(`[Tool] Saving task: ${task.title}...`);
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, id: Math.random().toString(36).substr(2, 9) };
  },

  /**
   * Simulated calendar scheduling.
   */
  scheduleEvent: async (event: { title: string; time: string; description: string }) => {
    console.log(`[Tool] Scheduling event: ${event.title} at ${event.time}...`);
    await new Promise(resolve => setTimeout(resolve, 1200));
    return { success: true, id: Math.random().toString(36).substr(2, 9) };
  },

  /**
   * Simulated Do Not Disturb tool.
   */
  setDND: async (active: boolean, until?: string) => {
    console.log(`[Tool] Setting DND to ${active}${until ? ` until ${until}` : ''}...`);
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, status: active ? 'ON' : 'OFF', until };
  },

  /**
   * Simulated Screen Analysis tool.
   */
  scanScreen: async () => {
    console.log(`[Tool] Scanning screen for context...`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate finding a message
    return {
      text: "Meeting postponed to tomorrow at 2 PM",
      source: "WhatsApp",
      detectedIntent: "schedule_update",
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Simulated Voice Intent tool.
   */
  processVoice: async (audioBlob?: Blob) => {
    console.log(`[Tool] Processing voice intent...`);
    await new Promise(resolve => setTimeout(resolve, 1200));
    return {
      transcript: "Remind me to call John at 5 PM",
      intent: "reminder",
      entities: {
        action: "call John",
        time: "17:00"
      },
      confidence: 0.94
    };
  },

  /**
   * Simulated Timetable processing.
   */
  processTimetable: async (data: string) => {
    console.log(`[Tool] Processing timetable data...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      classes: [
        { name: "AI Systems", time: "10:00 - 12:00", days: ["Monday", "Wednesday"] },
        { name: "Neural Networks", time: "14:00 - 16:00", days: ["Tuesday", "Thursday"] }
      ],
      recommendedDND: "10:00 - 12:00, 14:00 - 16:00"
    };
  }
};
