import React from 'react';

interface ComplaintCardProps {
  tag: string;
  title: string;
  status: string;
  subtext: string;
  urgency: 'Daily' | 'Urgent' | 'Long-Term';
  tagColor: 'green' | 'blue';
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({
  tag,
  title,
  status,
  subtext,
  urgency,
  tagColor,
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'tag tag-orange';
      case 'in progress':
        return 'tag tag-blue';
      case 'resolved':
        return 'tag tag-green';
      default:
        return 'tag bg-gray-100 text-gray-800';
    }
  };

  const getTagColor = (color: 'green' | 'blue') => {
    return color === 'green' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <span className={`tag ${tagColor === 'green' ? 'tag-green' : 'tag-blue'}`}>
            {tag}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{subtext}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className={getStatusColor(status)}>
            {status}
          </span>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            {urgency}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintCard; 