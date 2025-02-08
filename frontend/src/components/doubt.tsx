"use client"

import { useState } from "react";

const Doubtsol: React.FC = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        setLoading(true);
        setResponse(null);
        try {
            const res = await fetch("http://localhost:3000/doubt", {
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
            <h1>Doubt Solver</h1>
            <label htmlFor="promptInput">Enter a prompt:</label>
            <input
                type="text"
                id="promptInput"
                placeholder="E.g., what is 2+2"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />
            <button
                onClick={sendRequest}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {loading ? "Loading..." : "Generate response"}
            </button>
            <h3>Response:</h3>
            <pre
                style={{
                    background: "#f4f4f4",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                }}
            >
                {response || "Response will appear here..."}
            </pre>
        </div>
    );
};

export default Doubtsol;
