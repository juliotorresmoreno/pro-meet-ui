import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-12 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Design System
      </h1>

      <Section title="Color Palette">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-md ${color.bgClass}`}></div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {color.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-500">Heading 1</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              The quick brown fox jumps
            </h1>
          </div>
          <div>
            <p className="text-xs text-gray-500">Heading 2</p>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              The quick brown fox jumps
            </h2>
          </div>
          <div>
            <p className="text-xs text-gray-500">Body</p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien ultrices, sollicitudin nulla ut, volutpat nisi.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Small</p>
            <p className="text-sm text-gray-500">
              This is smaller body text, often used for captions.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Code</p>
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm text-purple-700 dark:text-purple-400">
              console.log(&quot;Hello, World!&quot;)
            </code>
          </div>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Primary Button
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            Secondary Button
          </button>
          <button className="px-6 py-3 text-blue-600 hover:text-blue-700 transition">
            Text Button
          </button>
          <button
            className="px-6 py-3 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
            disabled
          >
            Disabled Button
          </button>
        </div>
      </Section>

      <Section title="Form Inputs">
        <div className="max-w-md space-y-4">
          <div>
            <label
              htmlFor="text-input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Text Input
            </label>
            <input
              name="text-input"
              type="text"
              placeholder="Placeholder"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="textarea-input"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Select
            </label>
            <select
              name="select-input"
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                Checkbox
              </span>
            </label>
          </div>
        </div>
      </Section>

      <Section title="Navigation">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-600 rounded-full flex items-center justify-center">
                <CalendarIcon />
              </div>
              <span className="font-bold text-gray-800 dark:text-white">
                Pro-Meets
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium"
              >
                Calendar
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium"
              >
                People
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<CalendarIcon />}
            title="Meeting Card"
            description="Details about the scheduled meeting"
            actionLabel="View details"
          />
          <Card
            icon={<UserIcon />}
            title="Person Card"
            description="Candidate or client information"
            actionLabel="View profile"
          />
        </div>
      </Section>
    </div>
  );
}

interface SectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
      {title}
    </h2>
    {children}
  </section>
);

interface CardProps {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly actionLabel: string;
}

const Card = ({ icon, title, description, actionLabel }: CardProps) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition bg-white dark:bg-gray-800">
    <div className="p-4 bg-blue-50 dark:bg-blue-900">{icon}</div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
        {actionLabel}
      </button>
    </div>
  </div>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const colors = [
  { name: "Primary", hex: "#2563EB", bgClass: "bg-blue-600" },
  { name: "Primary Light", hex: "#3B82F6", bgClass: "bg-blue-500" },
  { name: "Primary Dark", hex: "#1D4ED8", bgClass: "bg-blue-700" },
  { name: "Gray 900", hex: "#111827", bgClass: "bg-gray-900" },
  { name: "Gray 700", hex: "#374151", bgClass: "bg-gray-700" },
  { name: "Gray 500", hex: "#6B7280", bgClass: "bg-gray-500" },
  { name: "Gray 300", hex: "#D1D5DB", bgClass: "bg-gray-300" },
  { name: "Gray 100", hex: "#F3F4F6", bgClass: "bg-gray-100" },
  { name: "Success", hex: "#10B981", bgClass: "bg-green-500" },
  { name: "Error", hex: "#EF4444", bgClass: "bg-red-500" },
];
