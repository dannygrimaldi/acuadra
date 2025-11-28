// components/useAclaracionesWS.js
import { useEffect, useState } from "react";

export function useAclaracionesWS() {
  const [aclaraciones, setAclaraciones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos iniciales desde Spring Boot
  useEffect(() => {
    fetch("http://localhost:8080/api/aclaraciones")
      .then(res => res.json())
      .then(data => {
        setAclaraciones(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("ERROR FETCH:", err);
        setLoading(false);
      });
  }, []);

  // WebSocket: recibir actualizaciones en tiempo real
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws/aclaraciones");

    ws.onmessage = (event) => {
      const updated = JSON.parse(event.data);
      setAclaraciones(prev => [...updated]);
    };

    ws.onerror = (e) => console.error("WS Error:", e);

    return () => ws.close();
  }, []);

  return { aclaraciones, loading };
}
