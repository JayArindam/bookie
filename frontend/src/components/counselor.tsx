"use client"

import { useState } from "react";

const Counselor: React.FC = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        setLoading(true);
        setResponse(null);
        try {
            const res = await fetch("http://localhost:3000/counselor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data.data|| "your request cannot be processed");
        } catch (error: any) {
            setResponse(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", lineHeight: 1.6 }}>
            {/* <h1>Counselor</h1> */}
            <label htmlFor="promptInput"className="text-white-500" >Enter a prompt:</label>
            <input
                type="text"
                id="promptInput"
                placeholder="E.g., how to be good in mathematics"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    color: "#ccc"

                }}
            />
        <div style={{textAlign:"center"}}>
          <button
                onClick={sendRequest}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "rgba(0, 0, 0, 0.67)",
                    color: "#ccc",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {loading ? "Loading..." : "Ask Counsellor"}
            </button>
        </div>
            <h3 className="text-white-500">Response:</h3>
            <pre
                style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                    border: "1px solid rgba(126, 126, 126, 0.5)",
                    borderRadius: "5px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",                    
                    color: "white"
                }}
            >
                {response || "Response will appear here..."}
            </pre>
        </div>
    );
};

export default Counselor;
