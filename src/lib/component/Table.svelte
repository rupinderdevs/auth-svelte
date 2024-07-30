<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Pagination from './Pagination.svelte';
  
    export let data: any[] = [];
    export let columns: { key: string; label: string }[] = [];
    export let itemsPerPage = 10;
  
    const dispatch = createEventDispatcher();
  
    let currentPage = 1;
  
    $: paginatedData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    function handleDelete(id: string) {
      dispatch('delete', id);
    }
  
    function handleView(id: string) {
      dispatch('view', id);
    }
  
    function handlePageChange(event: CustomEvent) {
      currentPage = event.detail.page;
    }
  </script>
  
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white">
      <thead>
        <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          {#each columns as column}
            <th class="py-3 px-6 text-left">{column.label}</th>
          {/each}
          <th class="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        {#each paginatedData as row (row.id)}
          <tr class="border-b border-gray-200 hover:bg-gray-100">
            {#each columns as column}
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {row[column.key]}
              </td>
            {/each}
            <td class="py-3 px-6 text-center">
              <div class="flex item-center justify-center">
                <button
                  on:click={() => handleView(row.id)}
                  class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button
                  on:click={() => handleDelete(row.id)}
                  class="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <Pagination
    totalItems={data.length}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    on:pageChange={handlePageChange}
  />