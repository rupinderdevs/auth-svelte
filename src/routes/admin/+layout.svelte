<script lang="ts">
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
   
  
    let activeMenu = 'dashboard';
  
    const menuItems = [
      { name: 'Dashboard', id: 'dashboard' },
      { name: 'Profile', id: 'analytics' },
      { name: 'Settings', id: 'dashboard' },
      { name: 'Messages', id: 'dashboard' },
      { name: 'Notifications', id: 'dashboard' },
      { name: 'Analytics', id: 'analytics' },
      { name: 'Reports', id: 'dashboard' },
      { name: 'Tasks', id: 'analytics' },
      { name: 'Calendar', id: 'analytics' },
      { name: 'Help', id: 'analytics' },
      { name: 'Dashboard', id: 'dashboard' },
      { name: 'Profile', id: 'analytics' },
      { name: 'Settings', id: 'dashboard' },
      { name: 'Messages', id: 'dashboard' },
      { name: 'Notifications', id: 'dashboard' },
      { name: 'Analytics', id: 'analytics' },
      { name: 'Reports', id: 'dashboard' },
      { name: 'Tasks', id: 'analytics' },
      { name: 'Calendar', id: 'analytics' },
      { name: 'Help', id: 'analytics' }
    ];
  
    function handleMenuClick(menuId: string) {
      activeMenu = menuId;
      goto(`/admin/${menuId}`);
    }
  
    function handleLogout() {
      // Perform logout logic
      console.log('Logout');
      goto('/login');
    }
  </script>
  
  <style>
    .sidebar {
      height: 100vh;
    }
  </style>
  
  <div class="flex h-screen">
    <aside class="sidebar w-64 bg-gray-800 text-white flex flex-col justify-between fixed h-screen overflow-y-auto">
      <div class="mt-4">
        {#each menuItems as item}
          <button
            on:click={() => handleMenuClick(item.id)}
            class="block w-full px-4 py-2 text-left hover:bg-gray-700 focus:outline-none {activeMenu === item.id ? 'bg-gray-700' : ''}"
          >
            {item.name}
          </button>
        {/each}
      </div>
      <div>
        <button
          on:click={handleLogout}
          class="w-full px-4 py-2 text-left hover:bg-gray-700 focus:outline-none mb-4"
        >
          Logout
        </button>
      </div>
    </aside>
    <main class="ml-64 w-full overflow-y-auto">
      <slot></slot>
    </main>
  </div>
  