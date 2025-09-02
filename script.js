// Pulse Analytics Dashboard - Main JavaScript

// Mock data for orders
const mockOrders = [
    { id: 'ORD-001', customer: 'John Smith', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Sarah Johnson', product: 'Basic Package', amount: 149.50, status: 'pending', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Mike Davis', product: 'Enterprise Suite', amount: 899.99, status: 'completed', date: '2024-01-13' },
    { id: 'ORD-004', customer: 'Emily Wilson', product: 'Starter Kit', amount: 79.99, status: 'cancelled', date: '2024-01-12' },
    { id: 'ORD-005', customer: 'David Brown', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2024-01-11' },
    { id: 'ORD-006', customer: 'Lisa Anderson', product: 'Basic Package', amount: 149.50, status: 'pending', date: '2024-01-10' },
    { id: 'ORD-007', customer: 'Tom Martinez', product: 'Enterprise Suite', amount: 899.99, status: 'completed', date: '2024-01-09' },
    { id: 'ORD-008', customer: 'Rachel Green', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2024-01-08' },
    { id: 'ORD-009', customer: 'Kevin Lee', product: 'Premium Widget', amount: 299.99, status: 'pending', date: '2024-01-07' },
    { id: 'ORD-010', customer: 'Amanda White', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2024-01-06' },
    { id: 'ORD-011', customer: 'Chris Taylor', product: 'Enterprise Suite', amount: 899.99, status: 'cancelled', date: '2024-01-05' },
    { id: 'ORD-012', customer: 'Jessica Clark', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2024-01-04' },
    { id: 'ORD-013', customer: 'Ryan Garcia', product: 'Premium Widget', amount: 299.99, status: 'pending', date: '2024-01-03' },
    { id: 'ORD-014', customer: 'Michelle Rodriguez', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2024-01-02' },
    { id: 'ORD-015', customer: 'Daniel Moore', product: 'Enterprise Suite', amount: 899.99, status: 'completed', date: '2024-01-01' },
    { id: 'ORD-016', customer: 'Ashley Thompson', product: 'Starter Kit', amount: 79.99, status: 'pending', date: '2023-12-31' },
    { id: 'ORD-017', customer: 'James Lewis', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-30' },
    { id: 'ORD-018', customer: 'Nicole Hall', product: 'Basic Package', amount: 149.50, status: 'cancelled', date: '2023-12-29' },
    { id: 'ORD-019', customer: 'Robert Allen', product: 'Enterprise Suite', amount: 899.99, status: 'completed', date: '2023-12-28' },
    { id: 'ORD-020', customer: 'Jennifer Young', product: 'Starter Kit', amount: 79.99, status: 'pending', date: '2023-12-27' },
    { id: 'ORD-021', customer: 'William King', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-26' },
    { id: 'ORD-022', customer: 'Stephanie Wright', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2023-12-25' },
    { id: 'ORD-023', customer: 'Michael Scott', product: 'Enterprise Suite', amount: 899.99, status: 'pending', date: '2023-12-24' },
    { id: 'ORD-024', customer: 'Laura Adams', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-12-23' },
    { id: 'ORD-025', customer: 'Christopher Baker', product: 'Premium Widget', amount: 299.99, status: 'cancelled', date: '2023-12-22' },
    { id: 'ORD-026', customer: 'Melissa Nelson', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2023-12-21' },
    { id: 'ORD-027', customer: 'Andrew Carter', product: 'Enterprise Suite', amount: 899.99, status: 'pending', date: '2023-12-20' },
    { id: 'ORD-028', customer: 'Rebecca Mitchell', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-12-19' },
    { id: 'ORD-029', customer: 'Joshua Perez', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-18' },
    { id: 'ORD-030', customer: 'Samantha Roberts', product: 'Basic Package', amount: 149.50, status: 'cancelled', date: '2023-12-17' },
    { id: 'ORD-031', customer: 'Matthew Turner', product: 'Enterprise Suite', amount: 899.99, status: 'completed', date: '2023-12-16' },
    { id: 'ORD-032', customer: 'Hannah Phillips', product: 'Starter Kit', amount: 79.99, status: 'pending', date: '2023-12-15' },
    { id: 'ORD-033', customer: 'Brandon Campbell', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-14' },
    { id: 'ORD-034', customer: 'Vanessa Parker', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2023-12-13' },
    { id: 'ORD-035', customer: 'Tyler Evans', product: 'Enterprise Suite', amount: 899.99, status: 'pending', date: '2023-12-12' },
    { id: 'ORD-036', customer: 'Crystal Edwards', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-12-11' },
    { id: 'ORD-037', customer: 'Nathan Collins', product: 'Premium Widget', amount: 299.99, status: 'cancelled', date: '2023-12-10' },
    { id: 'ORD-038', customer: 'Heather Stewart', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2023-12-09' },
    { id: 'ORD-039', customer: 'Sean Sanchez', product: 'Enterprise Suite', amount: 899.99, status: 'pending', date: '2023-12-08' },
    { id: 'ORD-040', customer: 'Megan Morris', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-12-07' },
    { id: 'ORD-041', customer: 'Derek Rogers', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-06' },
    { id: 'ORD-042', customer: 'Tiffany Reed', product: 'Basic Package', amount: 149.50, status: 'cancelled', date: '2023-12-05' },
    { id: 'ORD-043', customer: 'Gregory Cook', product: 'Enterprise Suite', amount: 899.99, status: 'pending', date: '2023-12-04' },
    { id: 'ORD-044', customer: 'Monica Morgan', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-12-03' },
    { id: 'ORD-045', customer: 'Patrick Bell', product: 'Premium Widget', amount: 299.99, status: 'completed', date: '2023-12-02' },
    { id: 'ORD-046', customer: 'Stacy Murphy', product: 'Basic Package', amount: 149.50, status: 'pending', date: '2023-12-01' },
    { id: 'ORD-047', customer: 'Travis Bailey', product: 'Enterprise Suite', amount: 899.99, status: 'cancelled', date: '2023-11-30' },
    { id: 'ORD-048', customer: 'Angela Rivera', product: 'Starter Kit', amount: 79.99, status: 'completed', date: '2023-11-29' },
    { id: 'ORD-049', customer: 'Corey Cooper', product: 'Premium Widget', amount: 299.99, status: 'pending', date: '2023-11-28' },
    { id: 'ORD-050', customer: 'Danielle Richardson', product: 'Basic Package', amount: 149.50, status: 'completed', date: '2023-11-27' }
];

// Mock data for charts
const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Revenue',
        data: [85000, 92000, 88000, 95000, 102000, 98000, 105000, 112000, 108000, 115000, 118000, 124563],
        borderColor: '#7cc3ff',
        backgroundColor: 'rgba(124, 195, 255, 0.1)',
        tension: 0.4,
        fill: true
    }]
};

const ordersData = {
    labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Automotive'],
    datasets: [{
        label: 'Orders',
        data: [450, 320, 280, 190, 150, 120],
        backgroundColor: [
            '#7cc3ff',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6',
            '#06b6d4'
        ],
        borderWidth: 0
    }]
};

// Global variables
let currentPage = 1;
let itemsPerPage = 10;
let filteredOrders = [...mockOrders];
let sortColumn = 'date';
let sortDirection = 'desc';

// DOM elements
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const ordersTable = document.getElementById('orders-table');
const ordersTbody = document.getElementById('orders-tbody');
const emptyState = document.getElementById('empty-state');
const tableSearch = document.querySelector('.table-search');
const paginationInfo = document.getElementById('pagination-info');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const paginationPages = document.getElementById('pagination-pages');

// Initialize the application
function init() {
    setupEventListeners();
    initializeCharts();
    renderOrdersTable();
    updatePagination();
}

// Setup event listeners
function setupEventListeners() {
    // Login form
    loginForm.addEventListener('submit', handleLogin);
    
    // Sidebar toggle
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Table search
    tableSearch.addEventListener('input', handleTableSearch);
    
    // Table sorting
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => handleTableSort(header.dataset.sort));
    });
    
    // Pagination
    prevBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextBtn.addEventListener('click', () => changePage(currentPage + 1));
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(e.target) && 
            !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('open');
            sidebarToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (demo purposes)
    if (email && password) {
        // Hide login screen and show dashboard
        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');
        
        // Focus on main content for accessibility
        document.getElementById('main').focus();
    }
}

// Toggle sidebar
function toggleSidebar() {
    const isExpanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
    sidebarToggle.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
}

// Initialize charts
function initializeCharts() {
    // Revenue Chart (Line)
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: revenueData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(158, 179, 209, 0.1)'
                    },
                    ticks: {
                        color: '#9fb3d1'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(158, 179, 209, 0.1)'
                    },
                    ticks: {
                        color: '#9fb3d1',
                        callback: function(value) {
                            return '$' + (value / 1000) + 'k';
                        }
                    }
                }
            }
        }
    });
    
    // Orders Chart (Bar)
    const ordersCtx = document.getElementById('ordersChart').getContext('2d');
    new Chart(ordersCtx, {
        type: 'bar',
        data: ordersData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(158, 179, 209, 0.1)'
                    },
                    ticks: {
                        color: '#9fb3d1'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(158, 179, 209, 0.1)'
                    },
                    ticks: {
                        color: '#9fb3d1'
                    }
                }
            }
        }
    });
}

// Handle table search
function handleTableSearch() {
    const searchTerm = tableSearch.value.toLowerCase();
    
    filteredOrders = mockOrders.filter(order => 
        order.id.toLowerCase().includes(searchTerm) ||
        order.customer.toLowerCase().includes(searchTerm) ||
        order.product.toLowerCase().includes(searchTerm) ||
        order.status.toLowerCase().includes(searchTerm)
    );
    
    currentPage = 1;
    renderOrdersTable();
    updatePagination();
}

// Handle table sorting
function handleTableSort(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    // Update sort icons
    document.querySelectorAll('.sort-icon').forEach(icon => {
        icon.textContent = '↕';
    });
    
    const currentHeader = document.querySelector(`[data-sort="${column}"]`);
    const currentIcon = currentHeader.querySelector('.sort-icon');
    currentIcon.textContent = sortDirection === 'asc' ? '↑' : '↓';
    
    // Sort the data
    filteredOrders.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        // Handle date sorting
        if (column === 'date') {
            aVal = new Date(aVal);
            bVal = new Date(bVal);
        }
        
        // Handle amount sorting
        if (column === 'amount') {
            aVal = parseFloat(aVal);
            bVal = parseFloat(bVal);
        }
        
        if (sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
    
    currentPage = 1;
    renderOrdersTable();
    updatePagination();
}

// Render orders table
function renderOrdersTable() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageOrders = filteredOrders.slice(startIndex, endIndex);
    
    if (pageOrders.length === 0) {
        ordersTable.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }
    
    ordersTable.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    ordersTbody.innerHTML = pageOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.product}</td>
            <td>$${order.amount.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${order.status}</span></td>
            <td>${formatDate(order.date)}</td>
        </tr>
    `).join('');
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredOrders.length);
    
    // Update pagination info
    paginationInfo.textContent = `Showing ${startItem}-${endItem} of ${filteredOrders.length} orders`;
    
    // Update buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Update page numbers
    paginationPages.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => changePage(i));
        paginationPages.appendChild(pageBtn);
    }
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderOrdersTable();
        updatePagination();
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);



// Mobile nav toggle
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Active link highlight
(() => {
  const sections = document.querySelectorAll('section[id]');
  const anchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!('IntersectionObserver' in window) || !sections.length) return;
  const byId = id => document.querySelector('.nav-links a[href="#'+id+'"]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        anchors.forEach(a=>a.classList.remove('active'));
        const a = byId(e.target.id);
        if (a) a.classList.add('active');
      }
    });
  },{rootMargin:'-40% 0px -50% 0px',threshold:0.01});
  sections.forEach(s=>io.observe(s));
})();
