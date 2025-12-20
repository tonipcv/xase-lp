'use client';
import { Mail, MessageCircle, Github, ExternalLink } from 'lucide-react';
import { useDocsTheme } from '../ThemeContext';
import DocsContent from '../../../components/docs/DocsContent';

export default function SupportPage() {
  return (
    <DocsContent>
      <main className="flex-1 w-full md:w-auto px-4 md:px-12 py-6 md:py-10 max-w-full md:max-w-[900px]">
        <h1 className="text-4xl font-light tracking-tight mb-2">Support</h1>
        <p className="text-lg text-gray-400 mb-8">Get help from the XASE team and community.</p>

        <div className="grid gap-4">
          <a href="mailto:support@xase.ai" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#333] transition-colors">
            <Mail className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-white font-medium mb-1">Email Support</div>
              <div className="text-sm text-gray-400">support@xase.ai • Response within 24h</div>
            </div>
          </a>

          <a href="https://discord.gg/xase" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#333] transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-white font-medium mb-1">Discord Community</div>
              <div className="text-sm text-gray-400">Join our Discord for real-time help</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>

          <a href="https://github.com/xase-ai/xase-python/issues" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#333] transition-colors">
            <Github className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-white font-medium mb-1">GitHub Issues</div>
              <div className="text-sm text-gray-400">Report bugs and request features</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>

          <a href="https://status.xase.ai" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#333] transition-colors">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div>
              <div className="text-white font-medium mb-1">Status Page</div>
              <div className="text-sm text-gray-400">Check system status and uptime</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>
        </div>

        <h2 className="text-2xl font-light mt-12 mb-4">Enterprise Support</h2>
        <p className="text-gray-400 mb-4">Enterprise customers get:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Dedicated Slack channel</li>
          <li>Priority support (4h SLA)</li>
          <li>Technical account manager</li>
          <li>Custom integration assistance</li>
        </ul>
        <p className="text-gray-400 mt-4">Contact <a href="mailto:sales@xase.ai" className="text-white hover:underline">sales@xase.ai</a> to upgrade.</p>
      </main>
    </DocsContent>
  );
}
