interface Property {
  name: string
  type: string
}

interface ModelCardProps {
  title: string
  icon: string
  properties: Property[]
  notes?: string
}

export default function ModelCard({ title, icon, properties, notes }: ModelCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center mr-4">
            <i className={`fas ${icon} text-rose-600 dark:text-rose-400 text-xl`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        </div>

        <div className="space-y-2">
          {properties.map((prop, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">{prop.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {prop.type}
              </span>
            </div>
          ))}
        </div>

        {notes && (
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <i className="fas fa-info-circle mr-2"></i>
              {notes}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
