import React, { useState } from 'react';
import { Bell, Settings, Shield, LayoutDashboard, Building, Calendar, Package, FileText, Info, Users, LogOut, UserCog, Lock, CheckCircle, AlertCircle, Clock, Boxes, GraduationCap, ArrowLeftRight, FolderKanban, BarChart3, Settings2, ChevronRight, ThumbsUp, PartyPopper, Hand as HandClap } from 'lucide-react';

type NavItem = 'home' | 'dashboard' | 'licenses';

// Mock data for modules
const modules = [
  {
    id: 'export-licenses',
    name: 'Export Licenses',
    icon: Shield,
    licensed: true,
    accessible: true,
    description: 'Manage export licenses and compliance',
    stats: '23 Active Licenses'
  },
  {
    id: 'users',
    name: 'Users',
    icon: Users,
    licensed: true,
    accessible: true,
    description: 'User management and access control',
    stats: '156 Active Users'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    icon: Boxes,
    licensed: true,
    accessible: true,
    description: 'Supply chain tracking and management',
    stats: '45 Active Suppliers'
  },
  {
    id: 'training',
    name: 'Training',
    icon: GraduationCap,
    licensed: true,
    accessible: false,
    description: 'Compliance training and certification',
    stats: '12 Courses Available'
  },
  {
    id: 'transactions',
    name: 'Transactions',
    icon: ArrowLeftRight,
    licensed: true,
    accessible: true,
    description: 'Track and manage transactions',
    stats: '1.2k Monthly Transactions'
  },
  {
    id: 'information',
    name: 'Information Management',
    icon: FolderKanban,
    licensed: false,
    accessible: false,
    description: 'Document and information management',
    stats: 'License Required'
  },
  {
    id: 'reporting',
    name: 'Reporting',
    icon: BarChart3,
    licensed: true,
    accessible: true,
    description: 'Analytics and reporting tools',
    stats: '15 Report Templates'
  },
  {
    id: 'administration',
    name: 'Administration',
    icon: Settings2,
    licensed: true,
    accessible: true,
    description: 'System configuration and settings',
    stats: 'Full Access'
  }
];

// Previous license tracking code remains the same...
const licenseLimits = {
  'DSP-5': { total: 10, used: 3 },
  'DSP-73': { total: 5, used: 1 },
  'EAR': { total: 8, used: 2 }
};

const licenseAssignments = [
  {
    id: 1,
    licenseNumber: 'DSP-5-2024-001',
    organization: 'Aerospace Dynamics Inc.',
    type: 'DSP-5',
    issueDate: '2024-01-15',
    expiryDate: '2025-01-14',
    status: 'Active'
  },
  {
    id: 2,
    licenseNumber: 'EAR-2024-003',
    organization: 'Global Tech Solutions',
    type: 'EAR',
    issueDate: '2024-02-01',
    expiryDate: '2024-03-31',
    status: 'Active'
  },
  {
    id: 3,
    licenseNumber: 'DSP-73-2024-002',
    organization: 'Defense Systems Ltd.',
    type: 'DSP-73',
    issueDate: '2024-01-20',
    expiryDate: '2024-07-19',
    status: 'Active'
  }
];

const getNotifications = () => {
  const today = new Date();
  const thirtyDaysFromNow = new Date();
  thirtyDaysFromNow.setDate(today.getDate() + 30);

  return licenseAssignments.filter(license => {
    const expiryDate = new Date(license.expiryDate);
    return expiryDate <= thirtyDaysFromNow && expiryDate >= today;
  }).map(license => ({
    id: license.id,
    message: `License ${license.licenseNumber} for ${license.organization} expires on ${license.expiryDate}`,
    type: 'warning'
  }));
};

const calculateLicenseUsage = () => {
  const total = Object.values(licenseLimits).reduce((acc, curr) => acc + curr.total, 0);
  const used = Object.values(licenseLimits).reduce((acc, curr) => acc + curr.used, 0);
  const available = total - used;
  const utilizationRate = (used / total) * 100;

  return {
    total,
    used,
    available,
    utilizationRate: Math.round(utilizationRate)
  };
};

function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('home');
  const [licenseType, setLicenseType] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  const notifications = getNotifications();

  const HomeView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Trade Officer!</h1>
          <p className="mt-1 text-sm text-gray-500">Access your compliance management modules below</p>
        </div>
        <div className="flex space-x-2">
          <ThumbsUp className="h-6 w-6 text-blue-500" />
          <HandClap className="h-6 w-6 text-yellow-500" />
          <PartyPopper className="h-6 w-6 text-red-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => {
              if (module.licensed && module.accessible) {
                setSelectedModule(module.id);
                if (module.id === 'export-licenses') {
                  setActiveNav('dashboard');
                }
              }
            }}
            className={`relative group p-6 bg-white rounded-xl shadow-sm transition-all duration-200 ${
              module.licensed && module.accessible
                ? 'hover:shadow-md hover:scale-102 cursor-pointer'
                : 'opacity-75 cursor-not-allowed'
            }`}
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-lg ${
                module.licensed && module.accessible ? 'bg-blue-50' : 'bg-gray-50'
              }`}>
                <module.icon className={`h-6 w-6 ${
                  module.licensed && module.accessible ? 'text-blue-600' : 'text-gray-400'
                }`} />
              </div>
              {module.licensed && module.accessible && (
                <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
            <div className="mt-4">
              <h3 className={`text-lg font-semibold ${
                module.licensed && module.accessible ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {module.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{module.description}</p>
              <div className="mt-3 flex items-center">
                {module.licensed ? (
                  module.accessible ? (
                    <span className="inline-flex items-center text-sm text-blue-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {module.stats}
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-sm text-yellow-600">
                      <Lock className="h-4 w-4 mr-1" />
                      Access Required
                    </span>
                  )
                ) : (
                  <span className="inline-flex items-center text-sm text-red-600">
                    <Lock className="h-4 w-4 mr-1" />
                    License Required
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const DashboardView = () => {
    const licenseUsage = calculateLicenseUsage();

    return (
      <div className="space-y-6">
        {/* License Usage Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Licenses</p>
                <p className="text-2xl font-semibold text-gray-900">{licenseUsage.total}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Licenses</p>
                <p className="text-2xl font-semibold text-green-600">{licenseUsage.used}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Licenses</p>
                <p className="text-2xl font-semibold text-blue-600">{licenseUsage.available}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Utilization Rate</p>
                <p className="text-2xl font-semibold text-purple-600">{licenseUsage.utilizationRate}%</p>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* License Type Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">License Usage by Type</h2>
          <div className="space-y-4">
            {Object.entries(licenseLimits).map(([type, { total, used }]) => (
              <div key={type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{type}</span>
                  <span className="text-gray-600">{used} of {total} used</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${(used / total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* License Assignments Table */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">License Assignments Overview</h1>
          <button
            onClick={() => setActiveNav('licenses')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Assign New License
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {licenseAssignments.map((license) => (
                <tr key={license.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{license.organization}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{license.licenseNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{license.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{license.issueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{license.expiryDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {license.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const LicenseAssignmentForm = () => (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">License Assignment</h1>
        <p className="mt-1 text-sm text-gray-500">Assign and manage export control licenses</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* License Type */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                License Type
                <span className="ml-1 text-red-500">*</span>
                <Info className="inline-block ml-1 h-4 w-4 text-gray-400" />
              </label>
              <select
                value={licenseType}
                onChange={(e) => setLicenseType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select type...</option>
                <option value="DSP-5">DSP-5 (Permanent Export)</option>
                <option value="DSP-73">DSP-73 (Temporary Export)</option>
                <option value="EAR">EAR Re-export</option>
              </select>
            </div>

            {/* Organization */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Organization
                <span className="ml-1 text-red-500">*</span>
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select organization...</option>
                <option value="aero">Aerospace Dynamics Inc.</option>
                <option value="global">Global Tech Solutions</option>
                <option value="defense">Defense Systems Ltd.</option>
              </select>
            </div>

            {/* License Number */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                License Number
                <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter license number"
              />
            </div>

            {/* Issue Date */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Issue Date
                <span className="ml-1 text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="date"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Expiration Date */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Expiration Date
                <span className="ml-1 text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="date"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Associated Parties */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Associated Parties
                <Info className="inline-block ml-1 h-4 w-4 text-gray-400" />
              </label>
              <div className="mt-1 flex flex-wrap gap-2">
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <Building className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-700">Consignee Corp</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-700">End User Inc</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  + Add Party
                </button>
              </div>
            </div>

            {/* Product/Technology Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Product/Technology Description
                <span className="ml-1 text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter detailed description..."
              />
            </div>

            {/* License Conditions */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                License Conditions and Restrictions
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter conditions and restrictions..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Assign License
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">Export Control</span>
              </div>
              
              {/* Main Navigation */}
              <nav className="ml-10 flex space-x-4">
                <button
                  onClick={() => setActiveNav('home')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeNav === 'home'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  Home
                </button>
                {activeNav !== 'home' && (
                  <button
                    onClick={() => setActiveNav('dashboard')}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeNav === 'dashboard'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    License Management
                  </button>
                )}
              </nav>
            </div>

            {/* Right side - User Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowSettings(false);
                  }}
                  className="relative p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                >
                  <Bell className="h-6 w-6" />
                  {notifications.length > 0 && (
                    <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                      <div className="mt-2 space-y-2">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start p-2 bg-yellow-50 rounded-md">
                              <Calendar className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                              <p className="text-sm text-yellow-800">{notification.message}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No new notifications</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowSettings(!showSettings);
                    setShowNotifications(false);
                  }}
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100"
                >
                  <Settings className="h-6 w-6" />
                </button>

                {/* Settings Dropdown */}
                {showSettings && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <UserCog className="h-4 w-4 mr-2" />
                        Profile Settings
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Lock className="h-4 w-4 mr-2" />
                        Security
                      </button>
                      <hr className="my-1" />
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-2">
                  <p className="text-sm font-medium text-gray-700">Trade Officer</p>
                  <p className="text-xs text-gray-500">Compliance Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6">
        {activeNav === 'home' ? (
          <HomeView />
        ) : activeNav === 'dashboard' ? (
          <DashboardView />
        ) : (
          <LicenseAssignmentForm />
        )}
      </main>
    </div>
  );
}

export default App;