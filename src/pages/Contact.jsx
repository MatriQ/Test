import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理提交逻辑
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-b from-primary to-secondary"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">联系我们</h1>
          <p className="text-gray-300 text-center mb-8">
            我们非常重视您的反馈。请通过以下表单提供您的意见和建议，我们会及时回复。
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-200 mb-2">
                您的反馈
              </label>
              <textarea
                id="feedback"
                rows="6"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none text-white placeholder-gray-400"
                placeholder="请告诉我们您的想法..."
              />
            </div>
            
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="text-sm text-gray-400">
                让我们一起把服务做得更好
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-primary"
              >
                提交反馈
              </motion.button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h2 className="text-xl font-semibold mb-4">其他联系方式</h2>
            <div className="space-y-3 text-gray-300">
              <p>📧 邮箱：contact@photostudio.com</p>
              <p>📱 电话：+86 123 4567 8900</p>
              <p>📍 地址：深圳市南山区科技园</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;