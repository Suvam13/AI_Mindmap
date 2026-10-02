window.MINDMAP_DATA = {
  id: "ai",
  label: "Artificial Intelligence",
  description: "The central concept of the exhibition.",
  daily: false,
  tier: 1,
  links: [],
  children: [
    {
      id: "tech",
      label: "Technology",
      description: "The different kinds of AI, and how each one works.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "tech-ml",
          label: "Learning from Data (Machine Learning)",
          description: "Computers finding patterns in examples instead of following hand-written rules.",
          daily: true,
          tier: 1,
          links: [],
          children: [
            { id: "tech-ml-supervised", label: "Supervised Learning", description: "Learns from examples that come with the right answers, like photos labelled \"cat\".", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-ml-unsupervised", label: "Unsupervised Learning", description: "Finds hidden groups in data without being told what to look for.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-ml-reinforcement", label: "Reinforcement Learning", description: "Learns by trial and error, earning rewards for good moves, like playing a game.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-ml-self-supervised", label: "Self-Supervised Learning", description: "Teaches itself by hiding part of the data and guessing it. Many modern models start here.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-ml-semi-supervised", label: "Semi-Supervised Learning", description: "Learns from a few labelled examples plus lots of unlabelled ones.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-ml-classification", label: "Classification", description: "Sorting things into categories, such as spam or not spam.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-ml-regression", label: "Regression", description: "Predicting a number, such as a house price.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-ml-clustering", label: "Clustering", description: "Automatically grouping similar things together.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "tech-dl",
          label: "Brain-Inspired (Deep Learning)",
          description: "Layered networks, loosely modelled on the brain, that learn very complex patterns.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-dl-nn", label: "Neural Networks", description: "Layers of simple connected units that together learn to recognise patterns.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-mlp", label: "Multilayer Perceptrons (MLP)", description: "The simplest kind of neural network, with layers stacked one after another.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-dl-cnn", label: "Image-Reading Networks (CNN)", description: "Networks specialised for pictures; they scan for edges, shapes and then whole objects.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-rnn", label: "Sequence Networks (RNN)", description: "Networks that handle things in order, like speech or time series.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-dl-transformers", label: "Transformers", description: "The design behind today's chatbots; it works out which words matter to each other.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-gans", label: "Image-Forging Networks (GANs)", description: "Two networks compete: one makes fakes, the other tries to catch them.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-diffusion", label: "Diffusion Models", description: "Create images by gradually turning random noise into a picture.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-vae", label: "Autoencoders (VAEs)", description: "Squeeze data into a compact form and rebuild it, useful for generating variations.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-dl-gnn", label: "Graph Networks (GNN)", description: "Learn from connections, such as friendships in a social network or atoms in a molecule.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-dl-snn", label: "Spiking Networks (SNN)", description: "Units that fire in pulses like real neurons; very energy-efficient.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-lang",
          label: "Language",
          description: "AI that reads, listens, writes and speaks human language.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-lang-llm", label: "Large Language Models", description: "Trained on huge amounts of text to write and answer questions; they power modern chatbots.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-lang-stt", label: "Speech-to-Text", description: "Turns spoken words into written text.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-lang-tts", label: "Text-to-Speech", description: "Reads written text out loud in a natural voice.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-lang-multimodal", label: "Multimodal Language Models", description: "Understand text, images and sound together.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-lang-tokenization", label: "Tokenization", description: "Chopping text into small pieces a computer can work with.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-lang-lemma", label: "Lemmatization and Stemming", description: "Reducing words to their base form, so \"running\" and \"ran\" count as one.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-lang-embeddings", label: "Word Embeddings (Word2Vec, GloVe)", description: "Turning words into numbers so that similar meanings sit close together.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "tech-vision",
          label: "Vision",
          description: "AI that makes sense of pictures and video.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-vision-class", label: "Image Classification", description: "Says what a picture shows, such as \"dog\" or \"beach\".", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-vision-detect", label: "Object Detection", description: "Finds and outlines things in an image, such as cars on a road.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-vision-seg", label: "Image Segmentation", description: "Labels every part of an image, pixel by pixel.", daily: false, tier: 1, links: [], children: [
              { id: "tech-vision-seg-semantic", label: "Semantic Segmentation", description: "Colours in every \"road\", \"sky\" and \"person\" region.", daily: false, tier: 2, links: [], children: [] },
              { id: "tech-vision-seg-instance", label: "Instance Segmentation", description: "Separates individual objects, like each person in a crowd.", daily: false, tier: 2, links: [], children: [] }
            ]},
            { id: "tech-vision-face", label: "Face Recognition", description: "Identifies or verifies a person from their face.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-vision-ocr", label: "Text Reading (OCR)", description: "Turns printed or handwritten text in photos into typed text.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-vision-video", label: "Video Understanding", description: "Follows what is happening across the frames of a video.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-vision-med", label: "Medical Image Analysis", description: "Helps doctors spot problems in X-rays and scans.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-vision-3d", label: "3D Vision", description: "Works out depth and shape from images.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-vision-scene", label: "Scene Understanding", description: "Grasps how the objects in a scene relate to each other.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "tech-robotics",
          label: "Robotics",
          description: "AI given a body that can sense and move in the real world.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-robotics-industrial", label: "Industrial Robots", description: "Robot arms that build and assemble things in factories.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-service", label: "Service Robots", description: "Robots that help with everyday tasks, like robot vacuums.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-robotics-av", label: "Self-Driving Vehicles", description: "Cars and trucks that sense the road and steer themselves.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-drones", label: "Drones", description: "Flying machines that navigate and inspect with AI.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-humanoid", label: "Humanoid Robots", description: "Robots shaped like people, built to work in human spaces.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-swarm", label: "Swarm Robotics", description: "Many simple robots cooperating like a flock of birds.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-soft", label: "Soft Robotics", description: "Flexible, squishy robots that can handle delicate objects.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-robotics-hri", label: "Human–Robot Interaction", description: "How robots and people communicate and work side by side.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "tech-rules",
          label: "Rule-Based Systems (Expert Systems)",
          description: "An older kind of AI that follows rules written by human experts, not learned from data.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-rules-if-then", label: "If-Then Rules", description: "Experts write down rules and the system applies them one by one.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-rules-kb", label: "Knowledge Bases", description: "Organised stores of facts the system can look things up in.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-rules-fuzzy", label: "Fuzzy Logic", description: "Handles \"somewhat hot\" or \"fairly fast\" instead of just yes or no.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-rules-case", label: "Case-Based Reasoning", description: "Solves a new problem by finding a similar past case.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-rules-inference", label: "Inference Engines", description: "The part that combines rules and facts to reach a conclusion.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-rules-frame", label: "Frame-Based Systems", description: "Store knowledge in structured templates, like a form for each concept.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-rules-neuro-fuzzy", label: "Neuro-Fuzzy Systems", description: "Combine neural networks with fuzzy logic.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "tech-gen",
          label: "Generative AI",
          description: "AI that creates brand-new content rather than just analysing existing content.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-gen-text", label: "Text Generation", description: "Writes stories, emails, answers and summaries.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-gen-image", label: "Image Generation", description: "Makes pictures from a written description.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-gen-audio", label: "Audio Generation", description: "Creates voices, sound effects and other audio.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-gen-video", label: "Video Generation", description: "Produces short video clips from a prompt.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-gen-music", label: "Music Generation", description: "Composes original music in almost any style.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-gen-code", label: "Code Generation", description: "Writes computer programs from plain-language instructions.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "tech-emerging",
          label: "Emerging Fields",
          description: "Newer ideas that are still taking shape.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "tech-emerging-quantum", label: "Quantum AI", description: "Using quantum computers to tackle problems that are very hard for normal ones.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-qml", label: "Quantum Machine Learning", description: "Learning algorithms designed to run on quantum computers.", daily: false, tier: 2, links: [], children: [] },
            { id: "tech-emerging-neuromorphic", label: "Neuromorphic Computing", description: "Chips built to work like brains, using far less power.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-edge", label: "Edge AI and TinyML", description: "AI running directly on your phone or a tiny device, not in the cloud.", daily: true, tier: 1, links: [], children: [] },
            { id: "tech-emerging-xai", label: "Explainable AI (XAI)", description: "Making an AI's decisions understandable to humans.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-federated", label: "Federated Learning", description: "Learning from data across many devices without the data leaving them.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-causal", label: "Causal AI", description: "Working out what causes what, not just what goes together.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-multimodal", label: "Multimodal AI", description: "Systems that combine sight, sound and language at once.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-science", label: "AI for Science", description: "Helping researchers find discoveries faster.", daily: false, tier: 1, links: [], children: [] },
            { id: "tech-emerging-climate", label: "AI for Climate Modelling", description: "Improving predictions of weather and climate.", daily: false, tier: 1, links: [], children: [] }
          ]
        }
      ]
    },
    {
      id: "caps",
      label: "Capabilities",
      description: "Everything AI can do, and the possibilities it opens up.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "caps-see",
          label: "See",
          description: "Making sense of pictures and video.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-see-objects", label: "Recognise Objects", description: "Tell a cat from a car, or a ripe fruit from an unripe one.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-see-faces", label: "Recognise Faces", description: "Unlock a phone or find a friend in your photos.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-see-patterns", label: "Spot Patterns", description: "Notice regularities humans might miss in huge amounts of data.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-see-scenes", label: "Understand Scenes", description: "Work out what is happening in a photo or video.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-hear",
          label: "Hear and Speak",
          description: "Listening to people and talking back.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-hear-speech", label: "Recognise Speech", description: "Turn what you say into text or commands.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-hear-speak", label: "Speak Aloud", description: "Read text out in a natural voice.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-hear-translate", label: "Translate Speech Live", description: "Help people speaking different languages talk to each other.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-lang",
          label: "Understand Language",
          description: "Making sense of what people write and say.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-lang-translate", label: "Translate", description: "Convert text between languages.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-qa", label: "Answer Questions", description: "Find or work out answers to everyday questions.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-summarise", label: "Summarise", description: "Boil long documents down to the key points.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-lang-sentiment", label: "Read Feelings in Text (Sentiment)", description: "Tell whether a review or message is positive or negative.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-lang-facts", label: "Pull Out Key Facts", description: "Find names, dates and amounts inside documents.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-learn",
          label: "Learn",
          description: "Getting better with experience.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-learn-data", label: "Learn from Data", description: "Improve by studying many examples.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-learn-adapt", label: "Adapt to New Situations", description: "Adjust when conditions change.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-learn-hidden", label: "Discover Hidden Patterns", description: "Group and organise data no one labelled.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-learn-practice", label: "Improve with Practice", description: "Get better through trial and error.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-predict",
          label: "Predict",
          description: "Looking ahead using patterns from the past.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-predict-trends", label: "Forecast Trends", description: "Estimate what is likely to happen next, such as demand or weather.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-predict-risk", label: "Predict Risk", description: "Estimate the chance of illness, default or failure.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-predict-behaviour", label: "Anticipate Behaviour", description: "Guess what people are likely to do or want next.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-predict-unusual", label: "Spot the Unusual", description: "Flag anything that looks out of the ordinary.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-create",
          label: "Create",
          description: "Generating new things.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-create-text", label: "Write Text", description: "Draft stories, reports, emails and dialogue.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-create-image", label: "Make Images", description: "Turn words into pictures.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-create-audio", label: "Compose Audio", description: "Produce voices and sounds.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-create-video", label: "Produce Video", description: "Generate moving pictures.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-create-code", label: "Write Code", description: "Help people build software.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-reason",
          label: "Reason and Decide",
          description: "Weighing options and choosing.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-reason-plan", label: "Plan Ahead", description: "Work out a sequence of steps to reach a goal.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-reason-solve", label: "Solve Problems", description: "Apply logic to reach a conclusion.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-reason-recommend", label: "Recommend", description: "Suggest films, songs or products you might like.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-reason-weigh", label: "Weigh Risks", description: "Compare the upsides and downsides of a choice.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-reason-optimise", label: "Optimise", description: "Find the best use of time, money or resources.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-reason-complex", label: "Support Complex Decisions", description: "Help experts choose when there are many factors.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-act",
          label: "Act (Automation)",
          description: "Doing tasks without a person doing each step.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-act-tasks", label: "Automate Tasks", description: "Handle repetitive jobs automatically.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-act-processes", label: "Automate Processes", description: "Run entire workflows from start to finish.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-act-machines", label: "Operate Machines", description: "Drive, fly and control equipment on its own.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-act-robotic", label: "Robotic Automation", description: "Physical robots doing physical work.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "caps-interact",
          label: "Interact",
          description: "Working naturally with people.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "caps-interact-convo", label: "Hold Conversations", description: "Chat back and forth in everyday language.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-interact-va", label: "Virtual Assistants", description: "Help with reminders, questions and smart-home control.", daily: true, tier: 1, links: [], children: [] },
            { id: "caps-interact-robots", label: "Work Alongside Robots", description: "Collaborate safely with machines.", daily: false, tier: 1, links: [], children: [] },
            { id: "caps-interact-personalise", label: "Personalise Experiences", description: "Adapt to what each person likes.", daily: true, tier: 1, links: [], children: [] }
          ]
        }
      ]
    },
    {
      id: "apps",
      label: "Applications",
      description: "The many places AI is already at work in the world today.",
      daily: false,
      tier: 1,
      links: [],
      children: [
        {
          id: "apps-health",
          label: "Health",
          description: "Helping doctors and patients.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-health-scans", label: "Diagnosing from Scans", description: "Spot signs of disease in X-rays and MRIs.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-predict", label: "Predicting Disease", description: "Estimate who is at risk before symptoms show.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-drugs", label: "Discovering New Drugs", description: "Speed up the search for new medicines.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-personal", label: "Personalised Medicine", description: "Match treatments to the individual patient.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-health-monitor", label: "Monitoring Patients", description: "Watch vital signs and raise alerts, including via wearables.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-health-admin", label: "Hospital Administration", description: "Cut paperwork and schedule resources.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-access",
          label: "Accessibility",
          description: "Making the world usable for everyone.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-access-captions", label: "Live Captions", description: "Show speech as text in real time.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-access-describe", label: "Describing Images", description: "Tell blind users what is in a photo.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-access-voice", label: "Voice Control", description: "Operate devices by speaking.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-access-translate", label: "Live Translation", description: "Break language barriers in conversation.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-edu",
          label: "Education",
          description: "Supporting teachers and learners.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-edu-tutors", label: "AI Tutors", description: "Give one-to-one help and explain step by step.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-personal", label: "Personalised Learning", description: "Adjust lessons to each student's pace.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-marking", label: "Automatic Marking", description: "Grade quizzes and give quick feedback.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-material", label: "Making Learning Material", description: "Draft exercises, examples and summaries.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-edu-language", label: "Language Learning", description: "Practise speaking with instant correction.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-edu-analytics", label: "Learning Analytics", description: "Show teachers where students struggle.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-pub",
          label: "Public Services",
          description: "Helping governments serve people.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-pub-faster", label: "Faster Public Services", description: "Handle applications and queries more quickly.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-pub-policy", label: "Policy Analysis", description: "Test the likely effects of a policy.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-pub-fraud", label: "Fraud Detection", description: "Catch improper benefit or tax claims.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-pub-smart", label: "Smart Cities", description: "Manage lighting, waste and traffic.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-pub-disaster", label: "Disaster Management", description: "Predict floods and coordinate responses.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-biz",
          label: "Business and Finance",
          description: "Money, markets and companies.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-biz-forecast", label: "Financial Forecasting", description: "Estimate revenue and market movements.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-biz-fraud", label: "Fraud Detection", description: "Flag suspicious card payments.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-biz-risk", label: "Risk Management", description: "Measure and reduce financial risk.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-biz-credit", label: "Credit Assessment", description: "Estimate whether a loan will be repaid.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-biz-trading", label: "Algorithmic Trading", description: "Buy and sell on markets in milliseconds.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-biz-service", label: "Customer Service", description: "Answer routine customer questions any time.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-biz-recruit", label: "Recruitment and Hiring", description: "Screen applications and match candidates.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-biz-analytics", label: "Business Analytics", description: "Turn company data into insights.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-retail",
          label: "Retail and E-Commerce",
          description: "Selling and shopping.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-retail-rec", label: "Product Recommendations", description: "Suggest what you might want to buy next.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-retail-personal", label: "Personalised Shopping", description: "Tailor the store to each shopper.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-retail-demand", label: "Demand Forecasting", description: "Predict what will sell and when.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-retail-inventory", label: "Inventory Management", description: "Keep the right stock in the right place.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-retail-pricing", label: "Dynamic Pricing", description: "Adjust prices based on demand.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-retail-ads", label: "Targeted Advertising", description: "Show ads matched to your interests.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-retail-behaviour", label: "Customer Behaviour Analysis", description: "Understand how people shop.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-mfg",
          label: "Manufacturing",
          description: "Making things.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-mfg-auto", label: "Industrial Automation", description: "Run production lines with little human input.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-quality", label: "Quality Control", description: "Spot defects with cameras.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-maint", label: "Predictive Maintenance", description: "Fix machines before they break.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-supply", label: "Supply Chain Management", description: "Coordinate materials and deliveries.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-warehouse", label: "Warehouse Automation", description: "Robots that pick and pack orders.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-mfg-opt", label: "Production Optimisation", description: "Get more output with less waste.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-transport",
          label: "Transport",
          description: "Moving people and goods.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-transport-av", label: "Self-Driving Vehicles", description: "Cars that drive themselves.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-traffic", label: "Traffic Management", description: "Ease jams with smarter signals.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-route", label: "Route Planning and Navigation", description: "Find the quickest route around traffic.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-transport-logistics", label: "Logistics", description: "Plan deliveries efficiently.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-maint", label: "Predictive Maintenance", description: "Service vehicles before they fail.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-transport-fleet", label: "Fleet Management", description: "Coordinate many vehicles at once.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-agri",
          label: "Agriculture",
          description: "Growing food.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-agri-precision", label: "Precision Farming", description: "Give each part of a field exactly what it needs.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-crop", label: "Crop Monitoring", description: "Watch crops from drones and satellites.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-disease", label: "Crop Disease Detection", description: "Spot plant disease early from a leaf photo.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-yield", label: "Yield Prediction", description: "Estimate harvest size ahead of time.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-robots", label: "Farm Robots", description: "Weed, plant and harvest automatically.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-irrigation", label: "Automated Irrigation", description: "Water only when and where needed.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-agri-weather", label: "Weather Analysis", description: "Plan around local forecasts.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-sci",
          label: "Science and Research",
          description: "Speeding up discovery.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-sci-data", label: "Scientific Data Analysis", description: "Sift huge datasets for findings.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-protein", label: "Protein Folding", description: "Predict the 3D shape of proteins.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-drugs", label: "Drug Discovery", description: "Screen millions of candidate molecules.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-materials", label: "Materials Discovery", description: "Find new materials for batteries and more.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-climate", label: "Climate Modelling", description: "Simulate the Earth's climate.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-astro", label: "Astronomy", description: "Find planets and galaxies in telescope data.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-sci-sim", label: "Simulation and Modelling", description: "Run virtual experiments.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-media",
          label: "Media and Entertainment",
          description: "Films, music and games.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-media-rec", label: "Content Recommendations", description: "Suggest the next show or song.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-media-vfx", label: "Visual Effects", description: "Create effects and de-age actors.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-media-film", label: "Film Production", description: "Help with editing, scripts and planning.", daily: false, tier: 2, links: [], children: [] },
            { id: "apps-media-music", label: "Music Creation", description: "Compose and produce tracks.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-media-game", label: "Game Development", description: "Build smarter characters and worlds.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-media-gen", label: "Image and Video Generation", description: "Create artwork and clips.", daily: false, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-social",
          label: "Social Media and Communication",
          description: "Connecting people online.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-social-feed", label: "Feed Ranking", description: "Decide which posts you see first.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-social-mod", label: "Content Moderation", description: "Flag harmful posts for review.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-social-spam", label: "Spam Detection", description: "Filter junk emails and messages.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-social-bot", label: "Bot Detection", description: "Spot fake accounts.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-social-trend", label: "Trend Detection", description: "Notice what is going viral.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-social-sentiment", label: "Sentiment Analysis", description: "Gauge public mood.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-social-translate", label: "Machine Translation", description: "Translate posts and messages.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-social-va", label: "Virtual Assistants and Chatbots", description: "Answer questions in chat.", daily: true, tier: 1, links: [], children: [] }
          ]
        },
        {
          id: "apps-security",
          label: "Security",
          description: "Keeping people and systems safe.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-security-threat", label: "Threat Detection", description: "Spot attacks as they happen.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-security-anomaly", label: "Anomaly Detection", description: "Notice unusual behaviour.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-security-malware", label: "Malware Detection", description: "Recognise harmful software.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-security-fraud", label: "Fraud Detection", description: "Catch scams and identity theft.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-security-identity", label: "Identity Verification", description: "Confirm a person is who they claim, via face or fingerprint.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-security-response", label: "Automated Threat Response", description: "Respond to attacks in seconds.", daily: false, tier: 2, links: [], children: [] }
          ]
        },
        {
          id: "apps-env",
          label: "Environment and Energy",
          description: "Looking after the planet.",
          daily: false,
          tier: 1,
          links: [],
          children: [
            { id: "apps-env-climate", label: "Climate Modelling", description: "Understand long-term climate change.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-env-weather", label: "Weather Prediction", description: "Give accurate short-range forecasts.", daily: true, tier: 1, links: [], children: [] },
            { id: "apps-env-monitor", label: "Environmental Monitoring", description: "Track forests, oceans and pollution.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-env-energy", label: "Energy Optimisation", description: "Cut power use in buildings and grids.", daily: false, tier: 1, links: [], children: [] },
            { id: "apps-env-renewable", label: "Renewable Energy Forecasting", description: "Predict wind and solar output.", daily: false, tier: 1, links: [], children: [] }
          ]
        }
      ]
    }
  ]
};

// --- Post-processing: Generate mutual links from shared tags ---
(function() {
  const tagMap = {
    "#neural": ["tech-dl-nn"],
    "#cnn": ["tech-dl-cnn", "apps-mfg-quality", "apps-agri-crop"],
    "#transformer": ["tech-dl-transformers"],
    "#gan": ["tech-dl-gans"],
    "#diffusion": ["tech-dl-diffusion"],
    "#llm": ["tech-lang-llm"],
    "#stt": ["tech-lang-stt", "caps-hear-speech", "apps-access-captions"],
    "#tts": ["tech-lang-tts", "caps-hear-speak"],
    "#multimodal": ["tech-lang-multimodal", "tech-emerging-multimodal"],
    "#face": ["tech-vision-face", "caps-see-faces", "apps-security-identity"],
    "#medimg": ["tech-vision-med", "apps-health-scans"],
    "#industrial-robots": ["tech-robotics-industrial", "caps-act-robotic", "apps-mfg-auto"],
    "#av": ["tech-robotics-av", "caps-act-machines", "apps-transport-av"],
    "#hri": ["tech-robotics-hri", "caps-interact-robots"],
    "#gen-text": ["tech-gen-text", "caps-create-text", "apps-edu-material"],
    "#gen-image": ["tech-gen-image", "caps-create-image", "apps-media-gen"],
    "#gen-audio": ["tech-gen-audio", "caps-create-audio"],
    "#gen-video": ["tech-gen-video", "caps-create-video"],
    "#gen-music": ["tech-gen-music", "apps-media-music"],
    "#gen-code": ["tech-gen-code", "caps-create-code"],
    "#climate": ["tech-emerging-climate", "apps-sci-climate", "apps-env-climate"],
    "#ai-science": ["tech-emerging-science", "apps-sci-data"],
    "#translation": ["caps-hear-translate", "caps-lang-translate", "apps-access-translate", "apps-social-translate"],
    "#qa": ["caps-lang-qa"],
    "#sentiment": ["caps-lang-sentiment", "apps-social-sentiment"],
    "#forecast": ["caps-predict-trends", "apps-biz-forecast", "apps-retail-demand", "apps-agri-yield", "apps-env-renewable"],
    "#anomaly": ["caps-predict-unusual", "apps-security-anomaly"],
    "#recsys": ["caps-reason-recommend", "apps-retail-rec", "apps-media-rec", "apps-social-feed"],
    "#optimise": ["caps-reason-optimise", "apps-mfg-opt", "apps-env-energy"],
    "#decision-support": ["caps-reason-complex"],
    "#chatbot": ["caps-interact-convo", "apps-biz-service"],
    "#va": ["caps-interact-va", "apps-access-voice", "apps-social-va"],
    "#personalise": ["caps-interact-personalise", "apps-retail-personal"],
    "#drug": ["apps-health-drugs", "apps-sci-drugs"],
    "#fraud": ["apps-pub-fraud", "apps-biz-fraud", "apps-security-fraud"],
    "#smartcity": ["apps-pub-smart", "apps-transport-traffic"],
    "#ads": ["apps-retail-ads"],
    "#maintenance": ["apps-mfg-maint", "apps-transport-maint"],
    "#supply-chain": ["apps-mfg-supply", "apps-transport-logistics"],
    "#weather": ["apps-agri-weather", "apps-env-weather"]
  };

  const nodeMap = {};
  function indexNodes(node) {
    nodeMap[node.id] = node;
    if (node.children) node.children.forEach(indexNodes);
  }
  indexNodes(window.MINDMAP_DATA);

  for (const tag in tagMap) {
    const ids = tagMap[tag];
    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < ids.length; j++) {
        if (i !== j) {
          const node = nodeMap[ids[i]];
          if (node && !node.links.includes(ids[j])) {
            node.links.push(ids[j]);
          }
        }
      }
    }
  }
})();