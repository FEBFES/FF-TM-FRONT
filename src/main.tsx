import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import App from "@/App"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<App />
		</Suspense>
	</StrictMode>
)
