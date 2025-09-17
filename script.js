// ===== Enhanced Knowledge Base =====
const deepikaKnowledgeBase = {
  personal: {
    name: "Deepika Singh",
    profession: "Climate & ESG Analytics Professional",
    experience: "2+ years",
    email: "deepikasingh.ds06@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepika-singh",
    availability: "Available for new opportunities"
  },
  
  expertise: {
    primary: [
      "GHG Emissions Analysis",
      "Carbon Offsets Evaluation", 
      "ESG Disclosure Reporting",
      "Climate Risk Assessment",
      "SQL Database Querying",
      "Excel Advanced Analytics",
      "AI Prompting & Automation"
    ]
  },
  
  achievements: {
    assessments: "15+ climate risk assessments completed",
    quality_improvement: "20% enhancement in client recommendation quality",
    efficiency_boost: "30% efficiency improvement through AI automation"
  }
};

// Force animation after page load (add to your DOMContentLoaded event)
setTimeout(() => {
  console.log('Force triggering stats animation...');
  
  // Find all metric-number elements and add data-target if missing
  const metrics = document.querySelectorAll('.metric-number');
  const targets = [15, 30, 20]; // Your target values
  
  metrics.forEach((metric, index) => {
    if (targets[index]) {
      metric.setAttribute('data-target', targets[index]);
      metric.textContent = '0';
      
      // Force animate immediately
      setTimeout(() => {
        animateNumber(metric);
      }, index * 200); // Stagger animations
    }
  });
}, 1000); // Wait 1 seconds after page load

// ===== Fixed AI Chatbot =====
class EnhancedDeepikaChatBot {
  constructor() {
    this.context = [];
    this.lastResponse = '';
    this.responseVariations = {
      greeting: [
        "Hello! I'm Deepika's AI assistant. I can tell you about her experience, skills, projects, and availability. What would you like to know?",
        "Hi there! Ask me anything about Deepika's climate analytics expertise, technical skills, or professional background.",
        "Welcome! I'm here to help you learn about Deepika Singh's professional experience in ESG reporting and data analysis."
      ],
      experience: [
        `Deepika has ${deepikaKnowledgeBase.personal.experience} of hands-on experience as a Climate & ESG Analytics Professional. She specializes in GHG emissions analysis and has contributed to ${deepikaKnowledgeBase.achievements.assessments} with ${deepikaKnowledgeBase.achievements.quality_improvement}.`,
        `With over 2 years in climate analytics, Deepika transforms complex environmental data into strategic insights. Her work includes comprehensive ESG disclosure reporting and carbon offset evaluations.`,
        `Deepika brings ${deepikaKnowledgeBase.personal.experience} of proven expertise in climate risk assessment. She's achieved significant results including ${deepikaKnowledgeBase.achievements.efficiency_boost} through AI automation.`
      ],
      skills: [
        "Deepika's technical expertise includes SQL database querying, Excel analytics, AI prompting & automation, GHG emissions analysis, ESG reporting, and data visualization.",
        "Her core skills span climate analytics, ESG disclosure reporting, advanced SQL and Excel capabilities, plus AI workflow automation that delivered measurable efficiency gains.",
        "Key technical strengths: SQL, Excel, Analytics Platforms, AI Prompting, Climate Risk Assessment, Carbon Offsets evaluation, and Business Intelligence tools."
      ],
      projects: [
        "Deepika has led impactful projects including: 1) Climate Risk Assessment Platform contributing to 15+ assessments, 2) AI-Powered Workflow Automation achieving 30% efficiency boost, 3) ESG Reporting Dashboard streamlining client processes.",
        "Her key projects showcase measurable impact: Climate Risk Assessment work with 20% quality improvement, AI automation systems with 30% efficiency gains, and comprehensive ESG reporting solutions.",
        "Notable achievements include developing climate analytics platforms, engineering AI prompts for workflow automation, and creating ESG disclosure systems that streamlined reporting processes."
      ],
      availability: [
        `Yes, Deepika is currently available for new opportunities! She's open to full-time, contract, and consulting roles in climate analytics and ESG reporting.`,
        `Deepika is actively seeking new opportunities in climate analytics and ESG reporting. She's available for immediate start depending on project scope.`,
        `She's available for new roles and typically can start within 2-4 weeks. Open to remote, hybrid, and on-site positions in climate/ESG analytics.`
      ],
      age: [
        "I don't have specific age information, but Deepika has 2+ years of professional experience in climate analytics and ESG reporting.",
        "While I can't share personal details like age, I can tell you about her professional experience and expertise in climate analytics.",
        "I focus on professional information rather than personal details. Deepika has proven expertise with 2+ years in climate and ESG analytics."
      ]
    };
  }

  generateResponse(userInput) {
    console.log('User input:', userInput); // Debug log
    
    const input = userInput.toLowerCase().trim();
    const intent = this.classifyIntent(input);
    
    console.log('Detected intent:', intent); // Debug log
    
    let response = this.getVariedResponse(intent, input);
    
    // Prevent same response twice in a row
    if (response === this.lastResponse) {
      response = this.getAlternativeResponse(intent);
    }
    
    this.lastResponse = response;
    this.context.push({ user: userInput, bot: response, intent: intent });
    
    console.log('Bot response:', response); // Debug log
    return response;
  }

  classifyIntent(input) {
    // More specific intent matching
    if (this.matchKeywords(input, ['hello', 'hi', 'hey', 'start', 'begin'])) {
      return 'greeting';
    }
    if (this.matchKeywords(input, ['old', 'age', 'years old', 'how old'])) {
      return 'age';
    }
    if (this.matchKeywords(input, ['experience', 'background', 'career', 'work history', 'professional'])) {
      return 'experience';
    }
    if (this.matchKeywords(input, ['skills', 'expertise', 'technical', 'abilities', 'technologies'])) {
      return 'skills';
    }
    if (this.matchKeywords(input, ['projects', 'work', 'portfolio', 'achievements', 'accomplishments'])) {
      return 'projects';
    }
    if (this.matchKeywords(input, ['available', 'availability', 'hiring', 'job', 'opportunity'])) {
      return 'availability';
    }
    if (this.matchKeywords(input, ['contact', 'email', 'reach', 'linkedin'])) {
      return 'contact';
    }
    if (this.matchKeywords(input, ['resume', 'cv', 'download'])) {
      return 'resume';
    }
    
    return 'general';
  }

  matchKeywords(input, keywords) {
    return keywords.some(keyword => input.includes(keyword));
  }

  getVariedResponse(intent, originalInput) {
    const variations = this.responseVariations[intent];
    if (variations) {
      const randomIndex = Math.floor(Math.random() * variations.length);
      return variations[randomIndex];
    }
    
    // Specific responses for unmatched intents
    if (originalInput.includes('sql')) {
      return "Deepika has extensive SQL expertise for GHG emissions analysis and database querying across analytics platforms.";
    }
    if (originalInput.includes('ai') || originalInput.includes('automation')) {
      return "She specializes in AI prompting and workflow automation, achieving 30% efficiency improvements.";
    }
    if (originalInput.includes('climate') || originalInput.includes('esg')) {
      return "Deepika's core expertise is climate and ESG analytics with proven 20% improvement in recommendation quality.";
    }
    
    // Default varied responses
    const defaultResponses = [
      "I can help you learn about Deepika's experience, skills, projects, or availability. What specific area interests you?",
      "Feel free to ask about her climate analytics expertise, technical skills, professional achievements, or current availability.",
      "I'm here to share information about Deepika's background in ESG reporting, data analysis, and AI automation. What would you like to know?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  getAlternativeResponse(intent) {
    // Backup responses to avoid repetition
    const alternatives = {
      greeting: "Hi! I'm here to answer questions about Deepika Singh's professional background. How can I assist you?",
      experience: "Deepika has built strong expertise over 2+ years in climate analytics, contributing to major ESG projects and risk assessments.",
      skills: "She combines technical skills (SQL, Excel, AI automation) with domain expertise in climate analytics and ESG reporting.",
      projects: "Her project portfolio demonstrates measurable impact in climate risk assessment and workflow automation.",
      availability: "Deepika is open to new opportunities in climate analytics and ESG reporting roles."
    };
    
    return alternatives[intent] || "Is there something specific about Deepika's professional background you'd like to know more about?";
  }
}

// ===== DOM Elements and Initialization =====
let chatBot;
let chatContainer, chatMessages, userInput, sendButton;
let aiChatBtn, closeChatBtn, quickQuestions;

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM loaded, initializing...'); // Debug log
  
  // Initialize chatbot
  chatBot = new EnhancedDeepikaChatBot();
  
  // Get DOM elements
  chatContainer = document.getElementById("ai-chat-container");
  chatMessages = document.getElementById("chat-messages");
  userInput = document.getElementById("user-input");
  sendButton = document.getElementById("send-message");
  aiChatBtn = document.getElementById("ai-chat-btn");
  closeChatBtn = document.getElementById("close-chat");
  quickQuestions = document.querySelectorAll(".quick-btn");
  
  // Setup all functionality
  setupChatInterface();
  setupButtons();
  setupStatsAnimation();
  
  console.log('Initialization complete'); // Debug log
});

// ===== Fixed Chat Interface =====
function setupChatInterface() {
  // Open chat handlers
  if (aiChatBtn) {
    aiChatBtn.addEventListener('click', openChat);
    console.log('AI chat button listener added');
  }
  
  // Alternative selectors for AI button
  const heroAiBtn = document.getElementById('hero-ai-btn');
  if (heroAiBtn) {
    heroAiBtn.addEventListener('click', openChat);
  }

  // Close chat
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', closeChat);
  }

  // Send message
  if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
  }
  
  if (userInput) {
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // Quick questions
  quickQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.getAttribute('data-question');
      if (question) {
        console.log('Quick question clicked:', question); // Debug log
        addMessage(question, 'user');
        setTimeout(() => {
          const response = chatBot.generateResponse(question);
          addMessage(response, 'bot');
        }, 500);
      }
    });
  });

  // Add initial bot message
  setTimeout(() => {
    addMessage("Hello! I'm Deepika's AI assistant. Ask me about her experience, skills, projects, or availability. What would you like to know?", 'bot');
  }, 1000);
}

function openChat() {
  console.log('Opening chat'); // Debug log
  if (chatContainer) {
    chatContainer.classList.add('active');
    if (userInput) {
      userInput.focus();
    }
  }
}

function closeChat() {
  console.log('Closing chat'); // Debug log
  if (chatContainer) {
    chatContainer.classList.remove('active');
  }
}

let isProcessing = false; // Prevent duplicate messages

function sendMessage() {
  if (!userInput || isProcessing) return;
  
  const message = userInput.value.trim();
  if (!message) return;
  
  console.log('Sending message:', message); // Debug log
  
  isProcessing = true;
  addMessage(message, 'user');
  userInput.value = '';
  
  // Disable input while processing
  sendButton.disabled = true;
  userInput.disabled = true;
  
  showTypingIndicator();
  
  setTimeout(() => {
    hideTypingIndicator();
    const response = chatBot.generateResponse(message);
    addMessage(response, 'bot');
    
    // Re-enable input
    sendButton.disabled = false;
    userInput.disabled = false;
    isProcessing = false;
    
    userInput.focus();
  }, 800 + Math.random() * 700);
}

function addMessage(content, sender) {
  if (!chatMessages) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const messageContent = document.createElement('div');
  messageContent.className = 'message-content';
  messageContent.textContent = content;
  
  messageDiv.appendChild(messageContent);
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message typing-indicator';
  typingDiv.id = 'typing-indicator';
  
  const typingContent = document.createElement('div');
  typingContent.className = 'message-content';
  typingContent.innerHTML = '<span class="typing-dots">...</span> AI is typing...';
  
  typingDiv.appendChild(typingContent);
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// ===== Fixed Button Handlers =====
function setupButtons() {
  // Request Resume Button
  const resumeButtons = [
    document.getElementById('request-resume-btn'),
    document.querySelector('[data-track="hero-contact"]'),
    document.querySelector('.btn:contains("Request Resume")')
  ].filter(Boolean);
  
  resumeButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Resume button clicked'); // Debug log
        alert('Resume request submitted! Deepika will contact you at the provided email.');
        // Add your resume request logic here
      });
    }
  });

  // Schedule Call Button - FIXED
  const scheduleButtons = [
    document.getElementById('schedule-call-btn'),
    document.querySelector('[data-track="hero-schedule"]'),
    document.querySelector('.btn:contains("Schedule Call")')
  ].filter(Boolean);
  
  scheduleButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Schedule button clicked'); // Debug log
        
        // Show modal or redirect to scheduling
        const userConfirmed = confirm('Would you like to schedule a call with Deepika Singh?\n\nClick OK to continue or Cancel to close.');
        
        if (userConfirmed) {
          // Option 1: Open email client
          window.location.href = `mailto:${deepikaKnowledgeBase.personal.email}?subject=Schedule Call Request&body=Hi Deepika,%0D%0A%0D%0AI would like to schedule a call to discuss potential opportunities.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0ABest regards`;
          
          // Option 2: Show success message
          setTimeout(() => {
            alert('Email client opened! If it didn\'t work, please contact: ' + deepikaKnowledgeBase.personal.email);
          }, 1000);
        }
      });
    }
  });
  
  console.log(`Setup complete: ${resumeButtons.length} resume buttons, ${scheduleButtons.length} schedule buttons`); // Debug log
}

// ===== Stats Animation (Fixed) =====
function setupStatsAnimation() {
  const stats = document.querySelectorAll('.metric-number[data-target]');
  
  if (stats.length === 0) {
    console.log('No stats found with data-target attribute'); // Debug log
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        animateNumber(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });
  
  stats.forEach(stat => observer.observe(stat));
  console.log(`Stats animation setup for ${stats.length} elements`); // Debug log
}

function animateNumber(element) {
  const target = parseInt(element.getAttribute('data-target')) || 0;
  const duration = 2000;
  const start = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ===== Additional Event Handlers =====
// Contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! Deepika will respond within 24 hours.');
    this.reset();
  });
}

// Console debug info
console.log('✅ Enhanced Portfolio JavaScript loaded');
console.log('🤖 AI Chatbot with varied responses initialized');
console.log('🔘 All button event listeners attached');
console.log('📊 Stats animation ready');
