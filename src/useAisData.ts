export function useAisData() {
  const socket = new EventSource('https://live.ais.barentswatch.no/live/v1/sse/ais');
  
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received AIS data:', data);
  };
}