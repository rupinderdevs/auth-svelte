<script lang="ts">
    import { onMount } from 'svelte';
	import Form from '$lib/component/Form.svelte';
  
    let userData: { id: number; name: string; email: string; phone: string } | null = null;
  
    onMount(() => {
      // Simulating an API call with the example data
      userData = {
        id: 1,
        name: "Emily",
        email: "oojson@gmail.com",
        phone: "+91897876624415",
      };
      console.log('Initial userData:', userData);
    });
  
    async function handleFormSubmit(event: CustomEvent) {
      const formData = event.detail;
      console.log('Form submitted with data:', formData);
  
      try {
        // Simulating an API call to update user data
        // In a real scenario, you'd make an actual API call here
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating network delay
  
        console.log('User data updated successfully');
        // Update the local userData state with the new data
        userData = { ...userData, ...formData };
        console.log('Updated userData:', userData);
  
        alert('User data updated successfully!');
      } catch (error) {
        console.error('Error updating user data:', error);
        alert('Failed to update user data. Please try again.');
      }
    }
  </script>
  
  <main class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-center my-8">User Profile</h1>
    {#if userData}
      <Form initialData={userData} on:formSubmit={handleFormSubmit} />
    {/if}
  </main>