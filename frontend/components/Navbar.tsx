'use client';

import { Home, Settings, User, Mail, Bell, Layers } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
  { icon: Mail, href: '/messages', label: 'Messages' },
  { icon: Bell, href: '/notifications', label: 'Notifications' },
  { icon: User, href: '/profile', label: 'Profile' },
  { icon: Settings, href: '/settings', label: 'Settings' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
    <nav className="fixed left-0 top-0 h-full w-16 bg-card shadow-lg flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
          <Layers className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      
      <div className="w-full h-px bg-border mb-6" />
      
      <div className="space-y-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group"
            >
              <div
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 group-hover:bg-accent",
                  isActive && "bg-accent"
                )}
              >
                <Icon
                  className={cn(
                    "w-6 h-6 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )}
                />
              </div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground rounded-md text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
    </>
    
  );
}