<script>
	import "../app.css";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	let { children } = $props();

	/** @type {any} */
	let deferredPrompt = $state(null);
	let isInstallable = $state(false);

	// Derive active route
	let currentPath = $derived($page.url.pathname);

	onMount(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault();
			deferredPrompt = e;
			isInstallable = true;
		});
		window.addEventListener("appinstalled", () => {
			isInstallable = false;
		});
	});

	async function installPWA() {
		if (deferredPrompt) {
			isInstallable = false;
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === "accepted") console.log("PWA installed");
			deferredPrompt = null;
		}
	}
</script>

<svelte:head>
	<!-- MathJax -->
	<script
		id="MathJax-script"
		async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
	></script>
	<!-- Mermaid -->
	<script
		src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"
	></script>
	<script>
		document.addEventListener("DOMContentLoaded", () => {
			if (window.mermaid) {
				window.mermaid.initialize({
					startOnLoad: false,
					theme: "dark",
				});
			}
		});
	</script>
</svelte:head>

<div class="app-shell">
	<!-- ── Top Header ─────────────────────────────────────────── -->
	<header class="top-header">
		<div class="header-row">
			<h1 class="app-title">Graph Theory</h1>
			{#if isInstallable}
				<button class="install-btn" onclick={installPWA}>
					<svg
						width="13"
						height="13"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						style="display:inline;margin-right:5px;vertical-align:-1px"
						><path
							d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
						/><polyline points="7 10 12 15 17 10" /><line
							x1="12"
							y1="15"
							x2="12"
							y2="3"
						/></svg
					>
					Install App
				</button>
			{/if}
		</div>

		<!-- Nav Pill -->
		<nav class="nav-pill" aria-label="Main">
			<a
				href="/"
				class="nav-tab"
				class:active={currentPath === "/"}
				aria-current={currentPath === "/" ? "page" : undefined}
			>
				<!-- Book icon -->
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
					<path
						d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
					/>
				</svg>
				Lecture
			</a>

			<a
				href="/practice"
				class="nav-tab"
				class:active={currentPath === "/practice"}
				aria-current={currentPath === "/practice" ? "page" : undefined}
			>
				<!-- Check-circle icon -->
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
					<polyline points="22 4 12 14.01 9 11.01" />
				</svg>
				Practice
			</a>

			<a
				href="/exam"
				class="nav-tab"
				class:active={currentPath === "/exam"}
				aria-current={currentPath === "/exam" ? "page" : undefined}
			>
				<!-- File-text icon -->
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path
						d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
					/>
					<polyline points="14 2 14 8 20 8" />
					<line x1="16" y1="13" x2="8" y2="13" />
					<line x1="16" y1="17" x2="8" y2="17" />
					<polyline points="10 9 9 9 8 9" />
				</svg>
				Exam Mode
			</a>
		</nav>
	</header>

	<!-- ── Main Scroll Area ───────────────────────────────────── -->
	<main class="main-scroll">
		{@render children()}
	</main>
</div>
