<!-- <script lang="ts">
    import { auth, userData } from "$lib/firebase";
    // make sure to import from library/modules correctly
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { user } from "$lib/firebase";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const credential = await signInWithPopup(auth, provider);
        // console.log(user)
        const idToken = await credential.user.getIdToken();
        const res = await fetch("/api/signin", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(idToken)
        })
    }

    async function signOutSSR() {
      const res = await fetch("/api/signin", {method: "DELETE"})
      await signOut(auth)
    }

</script> -->

<script lang="ts">
  import { auth, userData } from "$lib/firebase";

  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);

    const idToken = await credential.user.getIdToken();

    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
      },
      body: JSON.stringify({ idToken }),
    });
  }

  async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }
</script>

<h2>Login</h2>
{#if $userData?.username}
  <h2 class="card-title">Welcome, {$userData?.username}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button class="btn btn-warning" on:click={signOutSSR}>Sign out</button>
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}