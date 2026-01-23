import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

export function BusinessCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="w-[350px] h-[200px] bg-white rounded-xl shadow-2xl overflow-hidden relative">
        {/* Card Background Design */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-bl-full opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400 to-orange-500 rounded-tr-full opacity-70"></div>
        
        {/* Content */}
        <div className="relative z-10 p-5 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-orange-600" />
                <h1 className="text-xl font-bold text-orange-600">Этажи</h1>
              </div>
              <p className="text-[10px] text-gray-600 uppercase tracking-wide">Недвижимость</p>
            </div>
            
            {/* Photo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4MTUyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Agent Info */}
          <div className="space-y-0.5">
            <h2 className="text-lg font-semibold text-gray-900">Анна Петрова</h2>
            <p className="text-xs text-gray-600">Агент по недвижимости</p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-xs text-gray-700">+7 (912) 345-67-89</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-xs text-gray-700">a.petrova@etagi.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-xs text-gray-700">г. Москва, ул. Тверская, 15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
