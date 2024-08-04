<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    export let initialData: { id: number; name: string; email: string; phone: string } | null = null;
  
    let id: number | null = null;
    let name: string = '';
    let email: string = '';
    let phone: string = '';
    let isLoading: boolean = true;
  
    onMount(() => {
      if (initialData) {
        id = initialData.id;
        name = initialData.name;
        email = initialData.email;
        phone = initialData.phone.toString();
        isLoading = false;
      }
    });
  
    function handleSubmit(event: Event) {
      event.preventDefault();
      
      const payload = {
        id,
        name,
        email,
        phone
      };
  
      console.log('Payload to be sent to backend:', payload);
  
      dispatch('formSubmit', payload);
    }
  </script>
  
  {#if isLoading}
    <div class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  {:else}
    <form on:submit={handleSubmit} class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div class="mb-6">
        <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          bind:value={phone}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Update
      </button>
    </form>
  {/if}