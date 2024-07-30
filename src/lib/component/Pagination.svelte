<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let totalItems: number;
    export let itemsPerPage: number;
    export let currentPage: number;
  
    const dispatch = createEventDispatcher();
  
    $: totalPages = Math.ceil(totalItems / itemsPerPage);
  
    function changePage(page: number) {
      if (page >= 1 && page <= totalPages) {
        dispatch('pageChange', { page });
      }
    }
  </script>
  
  <div class="flex justify-center mt-4">
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
      <button
        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        on:click={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {#each Array(totalPages) as _, i}
        <button
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium {currentPage === i + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}"
          on:click={() => changePage(i + 1)}
        >
          {i + 1}
        </button>
      {/each}
      <button
        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        on:click={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  </div>