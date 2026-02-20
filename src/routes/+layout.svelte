<script>
	import "../app.css";
	import { onMount } from "svelte";

	let { children } = $props();

	/** @type {any} */
	let deferredPrompt = $state(null);
	let isInstallable = $state(false);

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
			if (outcome === "accepted") {
				console.log("User accepted the install prompt");
			}
			deferredPrompt = null;
		}
	}
</script>

<div
	class="app-container flex flex-col min-h-[100dvh] max-w-[800px] mx-auto relative"
>
	<!-- Top Navigation -->
	<header
		class="top-nav sticky top-0 z-50 p-6 pb-6 bg-[var(--surface-glass)] backdrop-blur-xl border-b border-[var(--border-glass)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col gap-5 pt-[calc(env(safe-area-inset-top)+1.5rem)]"
	>
		<div class="header-top flex justify-between items-center">
			<h1
				class="font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300 tracking-tight"
			>
				Graph Theory
			</h1>
			{#if isInstallable}
				<button
					onclick={installPWA}
					class="bg-[var(--accent-primary)] text-white border-0 px-4 py-2 rounded-[var(--radius-sm)] font-semibold text-sm cursor-pointer transition-transform duration-200 shadow-[0_4px_15px_var(--accent-glow)] active:scale-95"
				>
					Install App
				</button>
			{/if}
		</div>

		<!-- Nav Tabs -->
		<div
			class="nav-toggle-group flex bg-[var(--bg-darker)] rounded-full p-1.5 border border-[var(--border-glass)] relative"
		>
			<a
				href="/"
				class="nav-tab flex-1 py-3 px-4 font-medium text-[0.95rem] rounded-full cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 z-10 text-[var(--text-muted)] hover:text-white aria-[current=page]:text-white aria-[current=page]:bg-[var(--surface-dark)] aria-[current=page]:shadow-[0_2px_10px_rgba(0,0,0,0.2),var(--shadow-inner)] aria-[current=page]:border aria-[current=page]:border-white/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M4 19.5v-15A2.5 2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
					></path>
				</svg>
				Lecture
			</a>
			<a
				href="/practice"
				class="nav-tab flex-1 py-3 px-4 font-medium text-[0.95rem] rounded-full cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 z-10 text-[var(--text-muted)] hover:text-white aria-[current=page]:text-white aria-[current=page]:bg-[var(--surface-dark)] aria-[current=page]:shadow-[0_2px_10px_rgba(0,0,0,0.2),var(--shadow-inner)] aria-[current=page]:border aria-[current=page]:border-white/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
					<path d="M22 4L12 14.01l-3-3"></path>
				</svg>
				Practice
			</a>
			<a
				href="/exam"
				class="nav-tab flex-1 py-3 px-4 font-medium text-[0.95rem] rounded-full cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 z-10 text-[var(--text-muted)] hover:text-white aria-[current=page]:text-white aria-[current=page]:bg-[var(--surface-dark)] aria-[current=page]:shadow-[0_2px_10px_rgba(0,0,0,0.2),var(--shadow-inner)] aria-[current=page]:border aria-[current=page]:border-white/5"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
					></path>
					<polyline points="14 2 14 8 20 8"></polyline>
					<line x1="16" y1="13" x2="8" y2="13"></line>
					<line x1="16" y1="17" x2="8" y2="17"></line>
					<polyline points="10 9 9 9 8 9"></polyline>
				</svg>
				Exam Mode
			</a>
		</div>
	</header>

	<main class="main-content flex-1 p-6 sm:p-4">
		{@render children()}
	</main>
</div>

<!-- MathJax polyfill for formula rendering -->
<svelte:head>
	<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	<script
		id="MathJax-script"
		async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
	></script>
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
