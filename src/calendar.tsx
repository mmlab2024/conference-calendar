import { useState } from "react";
import { Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "./components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tab";
import AddToCalendarButton from "./add-calendar";

const SymposiumCalendar = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);

  const formatDate = (date, time) => {
    const [hours, minutes] = time.split(":");
    return new Date(2025, 4, date, hours, minutes);
  };

  const eventTypes = {
    ceremony: "bg-amber-200",
    lecture: "bg-yellow-600",
    session1: "bg-orange-400",
    session2a: "bg-lime-100",
    session2b: "bg-lime-200",
    session2c: "bg-lime-300",
    session3a: "bg-indigo-200",
    session3b: "bg-indigo-300",
    session3c: "bg-indigo-400",
    session4a: "bg-cyan-300",
    session4b: "bg-cyan-500",
    Young: "bg-orange-200",
    break: "bg-rose-400",
    poster: "bg-gray-400",
    assembly: "bg-amber-50",
  };

  interface Event {
    id: string;
    title: string;
    startTime: Date;
    endTime?: Date;
    location?: string;
    type: keyof typeof eventTypes;
    description?: string;
    speakers?:
      | { name: string; topic: string; affiliation?: String, abstract?: string }[]
      | string[];
    details?: string;
  }

  const events: { [key: string]: Event[] } = {
    "may-18": [
      {
        id: "opening",
        title: "Opening Ceremony",
        startTime: new Date(Date.UTC(2025, 4, 18, 12, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 12, 30, 0)),
        type: "ceremony",
        location: "Hall A",
        description: "",
      },
      {
        id: "s1",
        title: "S1 Neuron-glia interactions in neurodegenerative diseases",
        startTime: new Date(Date.UTC(2025, 4, 18, 12, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 14, 30, 0)),
        location: "Hall A",
        type: "session1",
        description:
          "Chair: Rebecca Matsas (Hellenic Pasteur Institute, Greece)",
        speakers: [
          {
            affiliation: "Dementia Research Institute, UK",
            name: "Soyon Hong",
            abstract: "https://is.gd/zcoPgH",
            topic:
              "S1-01	Neuro-glia-immune mechanisms of synapse loss in neurodegeneration",
          },
          {
            name: "Stefano Pluchino",
            affiliation: "University of Cambridge, UK",
            abstract: "https://is.gd/UZhFKv",
            topic:
              "S1-02	Mitochondrial complex I activity in microglia sustains neuroinflammation and neurotoxic damage: a novel therapeutic target for multiple sclerosis",
          },
          {
            name: "Rebecca Matsas",
            affiliation: "Hellenic Pasteur Institute, Greece ",
            abstract: "https://is.gd/0eEnQT",
            topic:
              "S1-03  The yin and yang of astrocyte-neuron interactions in Parkinson’s disease: implications for pathology and treatment strategies",
          },
          {
            name: "Klaus Armin Nave",
            affiliation:
              "Max  Planck  Institute for Multidisciplinary Sciences, Germany",
              abstract: "https://is.gd/0pxvil",
              topic:
              "S1-04  Oligodendrocytes and neurons as drivers of amyloid-β deposition in Alzheimer’s disease ",
          },
          {
            name: "Erika Tagliatti",
            affiliation: "Humanitas Research Hospital, Italy",
            abstract: "https://is.gd/od6X1q",
            topic:
              "S1-05  Microglial Trem2 control of neuronal bioenergetics and synaptic function: implications for neurodevelopmental/ neurodegenerative diseases",
          },
        ],
      },
      {
        id: "s2",
        title:
          "S2 From gene to investigational drug: ADNP protein and davunetide",
        startTime: new Date(Date.UTC(2025, 4, 18, 12, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 14, 30, 0)),
        location: "Hall B",
        type: "session1",
        description: "Chair: Illana Gozes (Tel Aviv University, Israel)",
        speakers: [
          {
            name: "Gidon Karmon",
            affiliation: "Tel Aviv University, Israel",
            abstract: "https://is.gd/V4z7zQ",
            topic:
              "S2-01	ADNP/Davunetide discovery and clinical development - introduction",
          },
          {
            name: "Frank Kooy & Claudio Peter D'Incal",
            affiliation: "University of Antwerp, Belgium",
            abstract: "https://is.gd/Bu96X4",
            topic:
              "S02-02 The Helsmoortel Van der Aa (ADNP) syndrome: a molecular perspective bridging patient-derived cell models, mice, and patients",
          },
          {
            name: "David Pozo Perez",
            affiliation: "University of Seville, Spain",
            abstract: "https://is.gd/taGnTD",
            topic:
              "S2-03	Decoding a pivotal role of ADNP in microglial polarization and metabolic reprogramming: implications for neurodegeneration",
          },
          {
            name: "Velia D'Agata",
            affiliation: "University of Catania, Italy",
            abstract: "https://is.gd/GCTD6l",
            topic: "S2-04	ADNP/davunetide (NAP) protection of the eye ",
          },
        ],
      },
      {
        id: "s3",
        title:
          "S3 Significance of extracellular vesicles in brain function and disease",
        startTime: new Date(Date.UTC(2025, 4, 18, 12, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 14, 30, 0)),
        location: "Hall C",
        type: "session1",
        description:
          "Chairs: Anja Schneider  (DZNE Bonn, Germany), Christian Neri (INSERM & Sorbonne University, France)",
        speakers: [
          {
            name: "Ege Kavalali",
            affiliation: "Vanderbilt University, USA",
            abstract: "https://is.gd/JfWlxL",
            topic:
              "S3-01	Extracellular vesicle dependent regulation of synaptobrevin/VAMP recycling in synapses",
          },
          {
            name: "Claudia Verderio",
            affiliation: "University Milano-Bicocca, Italy",
            abstract:"https://is.gd/L01g2s",
            topic:
              "S3-02	Microglial extracellular vesicles mediate C1q deposition at the synapse and promote pre-synaptic pruning",
          },
          {
            name: "Kenneth W Witwer",
            affiliation: "Johns Hopkins University, USA",
            abstract:"https://is.gd/QmrhUs",
            topic:
              "S3-03 Chronic inflammation in neurodegenerative and infectious diseases: extracellular vesicles as friend or foe?",
          },
          {
            name: "Anja Schneider",
            affiliation:
              "German Center for Neurodegenerative Diseases (DZNE), Germany",
            abstract:"https://is.gd/ah2n3f",
              topic:
              "S3-04	Extracellular vesicles as biomarkers in central nervous system diseases",
          },
        ],
      },
      {
        id: "plenary-1",
        title: "Plenary Lecture by Tom Südhof",
        startTime: new Date(Date.UTC(2025, 4, 18, 15, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 16, 30, 0)),
        type: "lecture",
        location: "Hall A",
        speakers: [
          {
            name: "Tom Südhof",
            affiliation:
              "Nobel Laurate 2013 | Avram Goldstein Professor School of Medicine | Professor, Departments of Neurosurgery, of Neurology and of Psychiatry and Behavioral Science, Stanford University, USA",
            topic: "Towards a Molecular Logic of Synapse Formation in Neural Circuits",
          },
        ],
      },
      {
        id: "welcome-reception",
        title: "Welcome Reception",
        startTime: new Date(Date.UTC(2025, 4, 18, 16, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 18, 17, 30, 0)),
        type: "ceremony",
        location: "Foyer",
      },
    ],
    "may-19": [
      {
        id: "special-lecture",
        title: "Special Lecture by Moussa Youdim",
        startTime: new Date(Date.UTC(2025, 4, 19, 5, 15, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 6, 0, 0)),
        type: "poster",
        location: "Hall A",
        speakers: [
          {
            name: "Moussa Youdim",
            abstract:"https://is.gd/VndtGj",
            affiliation: "Technion-Israel Institute of Technology",
            topic: "Site Activated Multi Target Iron Chelator-Antioxidant with Cholinesterase and Monoamine Oxidase Inhibitory Moieties for Alzheimer’s and Parkinson’s Diseases ",
          },
        ],
      },
      {
        id: "ysla-1",
        title: "Young Investigator Lectureship Award (YSLA) I",
        startTime: new Date(Date.UTC(2025, 4, 19, 6, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 6, 30, 0)),
        type: "Young",
        location: "Hall A",
        speakers: [
          {
            name: "Riccardo Cristofani",
            affiliation: "University of Milan, Italy",
            abstract:"https://is.gd/PcHBNK",
            topic: "The role of protein quality control system in repeat expansion neurodegenerative diseases",
          },
        ],
      },
      {
        id: "ysla-2",
        title: "Young Investigator Lectureship Award (YSLA) II",
        startTime: new Date(Date.UTC(2025, 4, 19, 6, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 7, 0, 0)),
        type: "Young",
        location: "Hall A",
        speakers: [
          {
            name: "Joana Guedes",
            affiliation: "Univerisity of Porto, Portugal",
            abstract:"https://is.gd/QiDgVn",
            topic: "Type 2 neuroimmune dysfunction contributes to neurodevelopmental disorders",
          },
        ],
      },
      {
        id: "s4",
        title:
          "S4 Astrocyte regulation of neural circuits: impact on brain functions",
        startTime: new Date(Date.UTC(2025, 4, 19, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 9, 30, 0)),
        location: "Hall A",
        type: "session2a",
        description:
          "Chairs: João Filipe Oliveira (Portugal), Carmen Falcone (Italy)",
        speakers: [
          {
            name: "João Filipe Oliveira",
            affiliation: "University of Minho, Portugal",
            abstract:"https://is.gd/Y9VcPF",
            topic:
              "S4-01	The involvement of astrocyte calcium-dependent signaling in fear memory",
          },
          {
            name: "Marta Navarrete",
            affiliation: "Cajal Institute, Spain	",
            abstract:"https://is.gd/O4dA3z",
            topic:
              "S4-02	Catching astrocyte ensembles: their role in memory formation and expression",
          },
          {
            name: "Juliana Rosa",
            affiliation: "National Hospital of Paraplegics, Spain",
            abstract:"https://is.gd/YrN7AH",
            topic:
              "S4-03	Bridging layers: how astrocyte networks boost tactile encoding and sensory integration ",
          },
          {
            name: "Lucile Ben Haim",
            affiliation: "Paris-Saclay Institute of Neuroscience, France",
            abstract:"https://is.gd/0evC6i",
            topic:
              "S4-04	Astrocyte transcription factor-based signaling shapes mouse socio-sexual behavior",
          },
        ],
      },
      {
        id: "s5",
        title:
          "S5 Emerging concepts and approaches in targeting human neurodegenerative diseases",
        startTime: new Date(Date.UTC(2025, 4, 19, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 9, 30, 0)),
        location: "Hall B",
        type: "session2a",
        description: "Chair: Kostas Vekrellis (BRFAA, Greece)",
        speakers: [
          {
            name: "Christos Proukakis",
            affiliation: "University College London, UK",
            abstract:"https://is.gd/OQpmoi",
            topic:
              "S5-01	Novel DNA sequencing approaches in synucleinopathies",
          },
          {
            name: "Yassemi Koutmani",
            affiliation:
              "Biomedical  Research  Foundation  Academy  of Athens, Greece",
            abstract:"https://is.gd/TnNRhc",
            topic:
              "S5-02 Human brain organoids: understanding the role of the “niche” in neuroregeneration",
          },
          {
            name: "Katia Karalis",
            affiliation: "Regeneron Pharmaceuticals, USA",
            abstract:"https://is.gd/Vh7AxG",
            topic:
              "S5-03	Engineered microphysiological systems in the study of neurodegenerative diseases",
          },
          {
            name: "Kostas Vekrellis",
            affiliation:
              "Biomedical  Research  Foundation  Academy  of Athens, Greece",
            abstract:"https://is.gd/NPWjmE",
            topic:
              "S5-04	Proteolotic activities of extracellular vesicles attenuate a-synuclein aggregation",
          },
        ],
      },
      {
        id: "s6",
        title: "S6 RNA dynamics and translation: key to brain function",
        startTime: new Date(Date.UTC(2025, 4, 19, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 9, 30, 0)),
        location: "Hall C",
        type: "session2a",
        description:
          "Chairs: Filipe Duarte (University of Coimbra, Portugal), Marta Zaninello (University of Cologne, Germany)",
        speakers: [
          {
            name: "Angelika Harbauer",
            affiliation:
                         "Max Planck Institute for Biological Intelligence, Germany",
            abstract:"https://is.gd/w9CCQJ",
            topic: "S6-01	Mitochondrial RNA hitch-hiking in neurons",
          },
          {
            name: "Elena Rugarli",
            affiliation: "University  of  Cologne, Germany",
            abstract:"https://is.gd/d7sKVG",
            topic:
              "S6-02	Mechanisms supporting localised translation of mitochondrial proteins in axons",
          },
          {
            name: "Ginny G. Farías",
            affiliation: "Utrecht University, Netherlands",
            abstract:"https://is.gd/CE4uw9",
            topic: "S6-03	Regulation of the axonal proteome",
          },
          {
            name: "Martine Cohen-Salmon",
            affiliation: "College of France, France",           abstract:"https://is.gd/SrGm6w",
            topic: "S6-04	Local translation in astrocytes for the development and regulation of the glio-neuro-vascular interface",
          },
        ],
      },
      {
        id: "s7",
        title:
          "S7	Mechanisms of glial cells contribution in the development of neurodegenerative diseases",
        startTime: new Date(Date.UTC(2025, 4, 19, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 13, 0, 0)),
        location: "Hall A",
        type: "session2b",
        description:
          "Chair: Dimitra Thomaidou (Hellenic Pasteur Institute, Greece)",
        speakers: [
          {
            name: "Katerina Akassoglou ",
            affiliation:
              "University of California, San Francisco & Gladstone Institutes, USA",
            abstract:"https://is.gd/qxUEDF",
            topic:
              "S7-01	Unlocking neuroimmune drivers of neurodegeneration: mechanisms and therapies",
          },
          {
            name: "Michal Schwartz",
            affiliation: "Weizmann Institute of Science, Israel",
            abstract:"https://is.gd/Pzri4D",
            topic:
              "S7-02	The brain-immune ecosystem: Supporting brain health in the context of aging and neurodegeneration	",
          },
          {
            name: "Emmanuel Nivet",
            affiliation: "Aix-Marseille University, France",
            abstract:"https://is.gd/YyfpbD",
            topic:
              "S7-03	hiPSC-based models to investigate the contribution of human astrocytes in age-related brain diseases",
          },
          {
            name: "Dimitra Thomaidou",
            affiliation: "Hellenic Pasteur Institute, Greece",
            abstract:"https://is.gd/qrMldK",
            topic:
              "S7-04	The Alzheimer’s disease risk factor BIN1 is a regulator of glial cell response to neuroinflammation",
          },
        ],
      },
      {
        id: "s8",
        title:
          "S8	Shedding light on the interaction between cannabinoids use and risk of psychiatric disorders: focus on translational studies",
        startTime: new Date(Date.UTC(2025, 4, 19, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 13, 0, 0)),
        location: "Hall B",
        type: "session2b",
        description:
          "Chair: Maria Antonietta De Luca (University of Cagliari, Italy)",
        speakers: [
          {
            name: "Sarah Beggiato",
            affiliation: "University of Ferrara, Italy",
            abstract:"https://is.gd/27VIaE",
            topic:
              "S8-01	Enduring kynurenine pathway alterations triggered by the exposure to cannabinoids in critical phases of brain maturation ",
          },
          {
            name: "Steven Laviolette",
            affiliation: "University of Western Ontario, Canada",
            abstract:"https://is.gd/zUwQ0v",
            topic:
              "S8-02	Impacts of maternal cannabis use on long-term psychiatric risk: the promise of interventions targeting the Omega-3 fatty acid signaling network",
          },
          {
            name: "Maria Antonietta De Luca",
            affiliation: "University of Cagliari, Italy",
            abstract:"https://is.gd/Vg5U8p",
            topic:
              "S8-03	Neurobiological sequelae of the administration of synthetic cannabinoid receptor agonists during adolescence",
          },
          {
            name: "Aviv Weinstein",
            affiliation: "Ariel University, Israel",
            abstract:"https://is.gd/HeguRF",
            topic:
              "S8-04	The effects of cannabis and synthetic cannabinoids on cognitive function and brain structure and function in fMRI",
          },
          {
            name: "Diego Quattrone",
            affiliation: "King’s College London, UK",
            abstract:"https://is.gd/KAbNPM",
            topic:
              "S8-05	Genetic variations in the endocannabinoid system and their role in cannabis-associated psychosis",
          },
        ],
      },
      {
        id: "s9",
        title:
          "S9	Convergent molecular dysfunctions in neurodevelopmental disorders: insights from studies on Fragile X syndrome",
        startTime: new Date(Date.UTC(2025, 4, 19, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 13, 0, 0)),
        location: "Hall C",
        type: "session2b",
        description:
          "Chairs: Maria Vincenza Catania (Institute for Biomedical Research and Innovation, Italy), Carlos Duarte (University of Coimbra, Portugal)",
        speakers: [
          {
            name: "Laura Cancedda",
            affiliation: "Italian Institute of Technology, Italy",
            abstract:"https://is.gd/ssaJNj",
            topic:
              "S9-01	Negr1 is a new possible convergent hub for autistic spectrum disorders, including Fragile X",
          },
          {
            name: "Carlos Duarte",
            affiliation: "University of Coimbra, Portugal",
            abstract:"https://is.gd/NDYeIF",
            topic:
              "S9-02	Molecular mechanisms underlying the impairment in hippocampal LTP in Fragile X syndrome",
          },
          {
            name: "Maria Vincenza Catania",
            affiliation:
              "Institute for Biomedical Research and Innovation, Italy ",
            abstract:"https://is.gd/ZBHgox",
            topic:
              "S9-03	Fragile X syndrome: molecular and synaptic dysfunctions and therapeutic implications",
          },
          {
            name: "Barbara Bardoni",
            affiliation:
              "Institute of  Molecular and Cellular Pharmacology, France",
            abstract:"https://is.gd/jy3EfS",
            topic:
              "S9-04	Novel and complementary pre-clinical approaches to treat Fragile X syndrome",
          },
        ],
      },
      {
        id: "s10",
        title:
          "S10	Mitochondria dynamics in ageing and neurodegenerative diseases",
        startTime: new Date(Date.UTC(2025, 4, 19, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 15, 30, 0)),
        location: "Hall A",
        type: "session2c",
        description:
          "Chairs: Angelo Poletti (University of Milan, Italy)",
        speakers: [
          {
            name: "Nektarios Tavernarakis",
            affiliation: "Foundation for Research and Technology, Greece",
            abstract:"https://is.gd/t5n9lO",
            topic:
              "S10-01	Mitophagy and mitochondrial biogenesis in ageing and neurodegeneration",
          },
          {
            name: "Allen Kaasik",
            affiliation: "University of Tartu, Estonia",
            abstract:"https://is.gd/0Ot0uN",
            topic:
              "S10-02	From ER calcium handling to mitophagy: pathways to neuronal health restoration",
          },
          {
            name: "Noemi Esteras ",
            affiliation: "Complutense University of Madrid, Spain",
            abstract:"https://is.gd/QjYWQt",
            topic:
              "S10-03	The different roles of mitochondria as modulators of calcium signalling in tauopathies",
          },
          {
            name: "Jose Noberto Vargas",
            affiliation: "University College of London, UK",
            abstract:"https://is.gd/iXSemz",
            topic:
              "S10-04	Axonal transport impairments in neurodegenerative diseases: mechanistic diversity and resulting therapeutic strategies",
          },
          {
            name: "Marta Cozzi ",
            affiliation: "University of Milan, Italy",
            abstract:"https://is.gd/23s5Kk",
            topic:
              "S10-05	Molecular defects in KIF5A-linked neurodegenerative and neurodevelopmental diseases",
          },
        ],
      },
      {
        id: "s11",
        title:
          "S11	Old players-new tricks: novel concepts of cortical interneuron function in disease",
        startTime: new Date(Date.UTC(2025, 4, 19, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 15, 30, 0)),
        location: "Hall B",
        type: "session2c",
        description:
          "Chairs: Lida Zoupi (University of Edinburgh, UK), Myrto Denaxa (University of Patras, Greece)",
        speakers: [
          {
            name: "Laurent Nguyen",
            affiliation: "University of Liege, Belgium",
            abstract:"https://is.gd/Y09KLL",
            topic:
              "S11-01	Neuro-glia interactions influence cortical morphogenesis across species",
          },
          {
            name: "Leena Williams",
            affiliation: "University of Edinburgh, UK",
            abstract:"https://is.gd/T0IFQy",
            topic:
              "S11-02	Unraveling how interneurons gate neocortical plasticity and sensory representation",
          },
          {
            name: "Maria Cecilia Angulo",
            affiliation: "University of Paris, France",
            abstract:"https://is.gd/KvBBS4",
            topic:
              "S11-03	Prefrontal low gamma oscillations and fear extinction learning rely on early interneuron-oligodendroglia communication",
          },
          {
            name: "Maarten Kole",
            affiliation: "Netherlands Institute for Neuroscience, Netherlands",
            abstract:"https://is.gd/D1Ozq5",
            topic: "S11-04 The rhythms of parvalbumin interneuron myelination",
          },
        ],
      },
      {
        id: "s12",
        title:
          "S12	Microglia-centric body to brain interactions in neuropsychiatric disorders",
        startTime: new Date(Date.UTC(2025, 4, 19, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 15, 30, 0)),
        location: "Hall C",
        type: "session2c",
        description: "Chair: Ali Jawaid (Poland)",
        speakers: [
          {
            name: "Anthony Hannan ",
            affiliation: "University of Melbourne, Australia",
            abstract:"https://is.gd/Twtfqd",
            topic:
              "S12-01	Gene-environment and brain-body interactions in preclinical models of neuropsychiatric disorders",
          },
          {
            name: "Ali Jawaid ",
            affiliation:
              "Polish Center for Technology Development & Nencki Institute of Experimental Biology, Poland",
            abstract:"https://is.gd/8jcx8c",
            topic:
              "S12-02	Microglia-lipid interactions determine resilience to adverse childhood experiences and neurodegeneration",
          },
          {
            name: "Agnes Nadjar ",
            affiliation: "University of Bordeaux, France",
            abstract:"https://is.gd/F9QWs4",
            topic:
              "S12-03	Metabolic reprogramming of microglia contributes to sex-dependent impairments in metabolic flexibility",
          },
          {
            name: "Blanca Aldana",
            affiliation: "University of Copenhagen, Denmark",
            abstract:"https://is.gd/XDBWqX",
            topic:
              "S12-04	Therapeutic implications of medium-chain fatty acids in modulating microglia metabolism and neurotransmitter homeostasis in neurodegenerative diseases",
          },
        ],
      },
    ],
    "may-20": [
      {
        id: "plenary-2",
        title: "Plenary Lecture by Giovanna Mallucci",
        startTime: new Date(Date.UTC(2025, 4, 20, 6, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 7, 0, 0)),
        type: "lecture",
        location: "Hall A",
        speakers: [
          {
            name: "Giovanna Mallucci",
            affiliation:
              "Principal Investigator, Altos Labs, Cambridge Institute of Science, UK",
            topic: "Mechanisms to medicines in neurodegeneration",
          },
        ],
      },
      {
        id: "s13",
        title: "S13 Cellular mechanisms of white matter homeostasis",
        startTime: new Date(Date.UTC(2025, 4, 20, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 9, 30, 0)),
        location: "Hall A",
        type: "session3a",
        description: "Chair: Aiman S Saab (University of Zurich, Switzerland)",
        speakers: [
          {
            name: "Rafael Almeida",
            affiliation: "University of Edinburgh, UK",
            abstract:"https://is.gd/qUHTTF",
            topic:
              "S13-01	Getting a grip on myelination: in vivo imaging of axon-myelin adhesion using zebrafish",
          },
          {
            name: "Aiman S Saab ",
            affiliation: "University of Zurich, Switzerland",
            abstract:"https://is.gd/Q1R265",
            topic:
              "S13-02	Illuminating the interplay between oligodendrocytes and axon functions",
          },
          {
            name: "Vanja Tepavčević Mandic ",
            affiliation: "University of the Basque Country, Spain",
            abstract:"https://is.gd/geEkcZ",
            topic:
              "S13-03	Monocarboxylates fuel myelin maintenance and repair in the central nervous system",
          },
          {
            name: "Anne Desmazières ",
            affiliation: "Paris Brain Institute, France",
            abstract:"https://is.gd/cusb1k",
            topic:
              "S13-04	Neuron-microglia interaction at the nodes of Ranvier in health and disease",
          },
        ],
      },
      {
        id: "s14",
        title:
          "S14 Metabolic alterations underlying brain resilience and pathogenesis in Alzheimer's disease",
        startTime: new Date(Date.UTC(2025, 4, 20, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 9, 30, 0)),
        location: "Hall B",
        type: "session3a",
        description:
          "Chair: Eugenio Barone (Sapienza University of Rome, Italy)",
        speakers: [
          {
            name: "Wenqiang Chen ",
            affiliation:
              "Harvard Medical School, USA and Steno Diabetes Center Copenhagen, Denmark",
            abstract:"https://is.gd/JtGQ6a",
            topic:
              "S14-01	Insulin-regulated glial activation alters cellular metabolism and uptake of Aβ in mouse models of Alzheimer’s disease",
          },
          {
            name: "Marie-Claude Potier ",
            affiliation: "Salpêtrière Hospital, France",
            abstract:"https://is.gd/fZgJMI",
            topic:
              "S14-02	Cholesterol dys-homeostasis in the brain during implications for amyloid precursor protein processing",
          },
          {
            name: "Eugenio Barone ",
            affiliation: "Sapienza University of Rome, Italy",
            abstract:"https://is.gd/fxatQc",
            topic:
              "S14-03	The role of sex-differences in brain energy metabolism: from resilience to the risk of developing Alzheimer’s Disease",
          },
          {
            name: "Mychael V Lourenco ",
            affiliation: "Federal University of Rio de Janeiro, Brazil",
            abstract:"https://is.gd/CBTNGm",
            topic:
              "S14-04	Metabolic factors associated with cognitive impairment in Alzheimer’s disease",
          },
        ],
      },
      {
        id: "s15",
        title:
          "S15	Crosstalk between sphingolipid signalling and neurodegeneration",
        startTime: new Date(Date.UTC(2025, 4, 20, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 9, 30, 0)),
        location: "Hall C",
        type: "session3a",
        description: "Chair: Riccardo Ghidoni (Sphingolipid Club, Italy)",
        speakers: [
          {
            name: "Chiara Donati",
            affiliation: "University of Florence, Italy",
            abstract:"https://is.gd/cTixXv",
                    
            topic:
              "S15-01	Protective role of sphingosine 1-phosphate signaling axis in neurodegenerative diseases",
          },
          {
            name: "Museer A. Lone ",
            affiliation: "University of Zurich, Switzerland",
            abstract:"https://is.gd/uPPkbj",
            topic:
              "S15-02	Sphingolipid homeostasis along the endomembrane system and its relevance in neurodegeneration",
          },
          {
            name: "Svjetlana Kalanj-Bognar ",
            affiliation: "University of Zagreb, Croatia",
            abstract:"https://is.gd/w0nsrQ",
            topic:
              "S15-03	Gangliosides modulate positioning and functions of proteins involved in synaptic plasticity and ion homeostasis – implications for neurodegeneration",
          },
          {
            name: "Liubov Kalinichenko",
            affiliation: "University of Erlangen, Germany",
            abstract:"ps://is.gd/lb82FD",
            topic:
              "S15-04	Emotional behavior and alcohol consumption in early onset Parkinson’s disease: role of the sphingolipid system",
          },
        ],
      },
      {
        id: "YMS-1",
        title: "Young Member Symposium I",
        startTime: new Date(Date.UTC(2025, 4, 19, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 13, 0, 0)),
        type: "break",
        location: "Hall A",
        speakers: [
          {
            name: "Konstantinos Diskos",
            affiliation: "University of Crete, Greece",
            abstract:"https://is.gd/flq169",
            topic:
              "YMSI-1 Juvenile mGLUR2/3 agonist LY379268 treatment enhances prefrontal GABAergic transmission and improves behavioral and synaptic deficits in both the mam mouse and mam rat neurodevelopmental models of schizophrenia",
           
          },
          {
            name: "Juliane Loui",
            affiliation: "Leipzig University, Germany",
            abstract:"https://is.gd/Zws2SB",
            topic:
              "YMSI-2 Deletion of THY-1 induces a distinct partially activated astrocyte phenotype in mice",
                     
          },
          {
            name: "Sofia Pasadaki",
            affiliation: "University of Crete, Greece",
            abstract:"https://is.gd/CnmFux",
            topic:
              "YMSI-3 Role of developmental regulators of axonal local translation in adult axon regeneration",
                     
          },
          {
            name: "Luise Schlotterose",
            affiliation: "University of Oxford, UK",
            abstract:"https://is.gd/7QD5ea",
            topic:
              "YMSI-4 Advanced in vitro models of blood-brain barrier leakage post-traumatic brain",
                     
          },
          {
            name: "Avinoam Ratzabi",
            affiliation: "Tel Aviv University, Israel",
            abstract:"https://is.gd/8UiZ4c",
            topic:
              "YMSI-5 The role of tumor-associated macrophages in the brain metastasis microenvironment",
                     
          },
          {
            name: "Elisa Marozzi Cruz",
            affiliation: "University of Oxford, UK",
            abstract:"https://is.gd/r24MuX",
            topic:
              "YMSI-6 Astrocyte-enriched 3D constructs enhance traumatic brain injury repair",          
          },
          {
            name: "Gabriele Karger",
            affiliation: "University of Bremen, Germany",
            abstract:"https://is.gd/A4Ij2b",
            topic:
              "YMSI-7 ATP depletion and restoration in cultured primary astrocytes",          
          },
          {
            name: "Sofia Petsangouraki",
            affiliation: "University of Crete, Greece",
            abstract:"https://is.gd/FqvhC2",
            topic:
              "YMSI-8 Contactin 2 is important in the regulation of myelination of SST+ interneurons",          
          },
          {
            name: "Mor Yam",
            affiliation: "Tel Aviv University, Israel",
            abstract:"https://is.gd/rO4wyq",
            topic:
              "YMSI-9 Mouse model of GRIN2D-developmental and epileptic encephalopathy recapitulates the human disease",          
          },
          {
            name: "Konstantina Kaplani",
            affiliation: "University of Patras, Greece",
            abstract:"https://is.gd/GwcsGe",
            topic:
              "YMSI-10 Exploring ependymal cell reprogramming as a therapeutic intervention for hydrocephalus ",          
          },
    
        ]
        
      },
      {
        id: "YMS-2",
        title: "Young Member Symposium II",
        startTime: new Date(Date.UTC(2025, 4, 19, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 19, 13, 0, 0)),
        type: "break",
        location: "Hall A",
        speakers:[
          {
          name: "Weronika Tomaszewska",
          affiliation: "Nencki Institute of Experimental Biology, Poland",
          abstract:"https://is.gd/R0S7oW",
          topic:
            "YMSII-1 Interplay of serum lipids and microglia in the susceptibility to the long-term behavioral effects of adverse childhood experiences",
         },
         {
          name: "Hidaayah O. Jimoh-Abdulghaffaar",
          affiliation: "University of Ilorin, Nigeria",
          abstract:"https://is.gd/FZ0ZlJ",
          topic:
            "YMSII-2 Aspirin as a modifier of epigenetic responses: DNA methylation changes in a social instability model of depression in female Wistar rats",
          },
       
          {
        name: "Annamaria Tisi",
            affiliation: "University of L'Aquila, Italy",
            abstract:"https://is.gd/LyEY1y",
            topic:
              "YMSII-3 The retina as a window to the brain: dysregulated endocannabinoid signalling as a biomolecular marker of early Alzheimer’s disease",
          },
          {
          name: "Anastasia Vamvaka-Iakovou",
              affiliation: "“Demokritos” NCSR, Greece",
              abstract:"https://is.gd/o0aAbT",
              topic:
                "YMSII-4 Monitoring the impact of prolonged use of cannabidiol in the healthy brain: a multiscale analysis",
              
          },
          {
            name: "Konstantina Dimoula",
                affiliation: "University of Athens, Greece",
                abstract:"https://is.gd/ajCudd",
                topic:
                  "YMSII-5 α-Synuclein is a novel functional interactor of the exocyst complex",
          },
          {
            name: "Elissavet-Kalliopi Akrioti",
            affiliation: "Hellenic Pasteur Institute, Greece ",
            abstract:"https://is.gd/xOCm3F",
            topic:
              "YMSII-6 Spatiotemporal dynamics of synaptic dysfunction in p.a53t-αSYN models: investigating early pathology as a therapeutic target",
          },
          {
            name: "Hazem Safory",
             affiliation: "Technion-Israel Inst. of Technology, Israel",
             abstract:"https://is.gd/R8Du4J",
             topic:
               "YMSII-7 An innovative decoy peptide strategy to mitigate α-synuclein pathology in Parkinson's disease models",
          },
          {
                name: "Marianna Naki",
                    affiliation: "Biomedical Research Foundation, Academy of Athens, Greece",
                    abstract:"https://is.gd/Ij1C4E",
                    topic:
                      "YMSII-8 SNCA-targeting antisense oligonucleotides as a therapeutic approach for alpha- synucleinopathies",

          },
          {
                  name: "Marta Turri",
                      affiliation: "University of Sherbrooke, Canada",
                      abstract:"https://is.gd/fgAUpO",
                      topic:
                        "YMSII-9 Stearoyl-CoA desaturase inhibition leads to fatty acids normalization and improved dendritic spines density in the hippocampus of 5XFAD-AD mouse model",
                        
          },
          {
                    name: "Anastasia Megalokonomou",
                        affiliation: "“Demokritos” NCSR, Greece",
                        abstract:"https://is.gd/75eRYY",
                        topic:
                          "YMSII-10 Novel antisense oligonucleotides against tau brain pathology",
          },
                  
         ]
      },
      {
        id: "s16",
        title:
          "S16 	Molecular hallmarks of polyglutamine spinocerebellar ataxias ",
        startTime: new Date(Date.UTC(2025, 4, 20, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 13, 0, 0)),
        location: "Hall C",
        type: "session3b",
        description:
          "Chairs: Clévio Nóbrega & David Brito (University of Algarve, Portugal)",
        speakers: [
          {
            name: "Patrícia Maciel",
            affiliation: "University of Minho, Portugal",
            abstract:"https://is.gd/WnVai8",
            topic:
              "S16-01	From molecular pathogenesis to therapeutic targets: the SCA3/MJD case",
          },
          {
            name: "Luis Velázquez-Pérez",
            affiliation:
              "Center for the Research and Rehabilitation of Hereditary Ataxias, Cuba ",
            abstract:"https://is.gd/Sta7Az",
            topic: "S16-02	Molecular biomarkers for SCA2 disease progression",
          },
          {
            name: "Angela Laird ",
            affiliation: "Macquarie University, Australia",
            abstract:"https://is.gd/iLX2La",
            topic: "S16-03	Gut-brain involvement in SCA3",
          },
          {
            name: "Thorsten Schmidt",
            affiliation: "University of Tübingen, Germany",
            abstract:"https://is.gd/zywqZF",
            topic:
              "S16-04	Genetic and molecular factors modifying the pathogenesis of Spinocerebellar Ataxia Type 3",
          },
        ],
      },
      {
        id: "s17",
        title:
          "S17 	Neuronal oscillations and brain network dynamics in health and disease",
        startTime: new Date(Date.UTC(2025, 4, 20, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 15, 30, 0)),
        location: "Hall A",
        type: "session3c",
        description:
          "Chairs: Irini Skaliora (University of Athens, Greece) & Kyriaki Sidiropoulou (Univeristy of Crete, Greece)",
        speakers: [
          {
            name: "Victoria Puig",
            affiliation: "Barcelona Institute of Biomedical Research, Spain",
            abstract:"https://is.gd/NfiZDI",
            topic:
              "S17-01	Abnormal prefrontal-hippocampal circuit dynamics in mouse models of schizophrenia: Role of serotonin receptors",
          },
          {
            name: "Wolf Singer",
            affiliation:
              "Ernst Struengmann Institute for Neuroscience, Germany",
            abstract:"https://is.gd/L8X1Ky",
            topic:
              "S17-02	Oscillations in the cerebral cortex: An essential mechanism for computations in dynamic state space",
          },
          {
            name: "Irini Skaliora ",
            affiliation: "University of Athens, Greece",
            abstract:"https://is.gd/gwT8et",
            topic:
              "S17-03	The transition from endogenous network activity to epileptiform discharges: a computational approach",
          },
          {
            name: "Stelios Smirnakis",
            affiliation: "Harvard Medical School, USA",
            abstract:"https://is.gd/vSx5e2",
            topic:
              "S17-04	Cortical circuit correlates of perception: lessons from a mouse model of perceptual bistability",
          },
        ],
      },
      {
        id: "s18",
        title:
          "S18 	Novel mechanisms & therapeutics against depression and Alzheimer’s in the Precision Medicine era",
        startTime: new Date(Date.UTC(2025, 4, 20, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 15, 30, 0)),
        location: "Hall B",
        type: "session3c",
        description:
          "Chairs: Ioannis Sotiropoulos (Greece) & Eleni Tzavara (France)",
        speakers: [
          {
            name: "Eleni Tzavara ",
            affiliation: "University of Paris Cité, France",
            abstract:"https://is.gd/8zLR0h",
            topic:
              "S18-01	Synaptic plasticity-related novel targets and biomarkers in animal models and clinical cohorts of depression",
          },
          {
            name: "Luisa Pinto ",
            affiliation: "University of Minho, Portugal",
            abstract:"https://is.gd/VnETfy",
            topic:
              "S18-02	Psilocybin and optogenetic regulation of neurogenenic circuitry against stress-driven depressive pathology",
          },
          {
            name: "Ioannis Sotiropoulos ",
            affiliation: "Demokritos Research Center, Greece",
            abstract:"https://is.gd/RNlDU6",
            topic:
              "S18-03	Exosomes and cannabidiol treatment in stress-driven Alzheimer’s disease brain pathology",
          },
          {
            name: "Joana Margarida Silva ",
            affiliation:
              "Life and Health Sciences Research Institute, Portugal",
              abstract:"https://is.gd/1DqTsF",
            topic:
              "S18-04	The role of tau in the regulation of translational stress response and its importance for brain pathology",
          },
        ],
      },
      {
        id: "s19",
        title: "S19 	Glial Cell Dynamics in Neurodegeneration",
        startTime: new Date(Date.UTC(2025, 4, 20, 13, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 20, 15, 30, 0)),
        location: "Hall C",
        type: "session3c",
        description:
          "Chairs: Antonella Tramutola (University of Rome, Italy) & Martina Gabrielli (CNR Institute of Neuroscience-Milano, Italy)",
        speakers: [
          {
            name: "Antonella Tramutola",
            affiliation: "University of Rome, Italy",
            abstract:"https://is.gd/YD1vUu",
            topic:
              "S19-01	Unveiling the role of miRNAs in glial cells: insights into insulin signaling and neurodegeneration",
          },
          {
            name: "Martina Gabrielli",
            affiliation: "CNR Institute of Neuroscience-Milano, Italy",
            abstract:"https://is.gd/S3kwOd",
            topic:
              "S19-02	Pathogenic roles of microglial extracellular vesicles in neurodegeneration",
          },
          {
            name: "Francesco Petrelli",
            affiliation: "University of Lausanne, Switzerland)",
            abstract:"https://is.gd/yHOrXJ",
            topic:
              "S19-03	Mitochondrial fatty acid β-oxidation in astrocytes is important for brain lipid homeostasis",
          },
          {
            name: "Ottavio Arancio",
            affiliation: "Columbia University USA",
            abstract:"https://is.gd/W8sFex",
            topic:
              "S19-04	The effect of astrocytic tau deposition on synaptic plasticity",
          },
        ],
      },
    ],
    "may-21": [
      {
        id: "bachelard-lecture",
        title: "Bachelard Lecture by Tony Turner",
        startTime: new Date(Date.UTC(2025, 4, 21, 6, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 7, 0, 0)),
        type: "poster",
        location: "Hall A",
        speakers: [
          {
            name: "Tony Turner",
            affiliation: "Professor, University of Leeds, UK",
            abstract:"https://is.gd/v6XZco",
            topic: "",
          },
        ],
      },

      {
        id: "s20",
        title:
          "S20	Mitochondria-nucleus crosstalk in behaviour and neurological disease",
        startTime: new Date(Date.UTC(2025, 4, 21, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 9, 30, 0)),
        location: "Hall A",
        type: "session4a",
        description: "Chair: Juan P. Bolanos (University of Salamanca, Spain)",
        speakers: [
          {
            name: "Michaela Filiou",
            affiliation: "University of Ioannina, Greece",
            abstract:"https://is.gd/JxwjrI",
            topic:
              "S20-01	Mitochondria dynamics at the crossroads of anxiety and behavior",
          },
          {
            name: "Angeles Almeida",
            affiliation: "University of Salamanca, Spain",
            abstract:"https://is.gd/jcMLuc",
            topic:
              "S20-02	Mitochondria-nucleus p53 signaling in Alzheimer’s disease and stroke",
          },
          {
            name: "Nicoleta Moisoi",
            affiliation: "De Montfort University, UK",
            abstract:"https://is.gd/lZd1bm",
            topic:
              "S20-03	Mitochondria stress signalling determines the cellular faith in Parkinson’s disease",
          },
          {
            name: "Giovanni Marsicano",
            affiliation: "University of Bordeaux, France",
            abstract:"https://is.gd/yKOkSo",
            topic:
              "S20-04	Regulation of behaviour by mitochondrial CB1 receptor signaling",
          },
        ],
      },
      {
        id: "s21",
        title:
          "S21 Mechanisms of neural fate acquisition and synaptic function: from development to disease",
        startTime: new Date(Date.UTC(2025, 4, 21, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 9, 30, 0)),
        location: "Hall B",
        type: "session4a",
        description:
          "Chairs: Panagiotis Politis (BRFAA, Greece) & George Leondaritis (University of Ioannina, Greece)",
        speakers: [
          {
            name: "Leda Dimou",
            affiliation: "University of Ulm, Germany",
            abstract:"https://is.gd/vWcFpU",
            topic:
              "S21-01	Oligodendrocyte progenitor cells: role and function in the healthy and injured brain",
          },
          {
            name: "Britta Eickholt",
            affiliation: "Charité- Berlin University Medicine, Germany",
            abstract:"https://is.gd/MOCVVR",
            topic:
              "S21-02	Function and regulation of PLPPR3 membrane proteins in neurons",
          },
          {
            name: "George Leondaritis",
            affiliation: "University of Ioannina, Greece",
            abstract:"https://is.gd/stQWif",
            topic:
              "S21-03	Bioactive lipid-dependent regulation of axonal growth during development",
          },
          {
            name: "Panagiotis Politis",
            affiliation:
              "Biomedical Research Foundation of the Academy of Athens (BRFAA), Athens, Greece",
            abstract:"https://is.gd/S4ROzu",
            topic:
              "S21-04	Gene regulation networks in nervous system development and cancer progression",
          },
        ],
      },
      {
        id: "s22",
        title: "S22	Extracellular matrix and astrocytes in health and disease",
        startTime: new Date(Date.UTC(2025, 4, 21, 7, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 9, 30, 0)),
        location: "Hall C",
        type: "session4a",
        description: "Chair: Eva Syková (Slovak Academy of Sciences, Slovakia)",
        speakers: [
          {
            name: "Eva Syková",
            affiliation: "Slovak Academy of Sciences, Slovakia",
            abstract:"https://is.gd/T1rCZk",
            topic:
              "S22-01	Astrocytes and perineuronal nets in extrasynaptic transmission and neuroplasticity	",
          },     
          {
            name: "Alexander Dityatev",
            affiliation: "German Center for Neurodegenerative Diseases (DZNE), Germany",
            abstract:"https://is.gd/KtUtoK",
            topic:
              "S22-02	Interplay between Glia and Extracellular Matrix at Tetrapartite Synapses",
          },
          {
            name: "Constanze Seidenbecher",
            affiliation: "Leibniz Institute for Neurobiology, Germany",
            abstract:"https://is.gd/KuKoZc",
            topic:
              "S22-03	Hyaluronan-based neural ECM in pathophysiological plasticity of the brain",
          },        
          {
            name: "Jessica Kwok",
            affiliation: "University of Leeds, UK",
            abstract:"https://is.gd/ONUfZ1",
            topic:
              "S22-04	Modulation of chondroitin sulfates in the perineuronal nets mediate differential glial responses after CNS injury",
          },
        ],
      },
      {
        id: "s23",
        title:
          "S23 	The search for objective neuromarkers and effective interventions in rare monogenic neurodevelopmental disorders",
        startTime: new Date(Date.UTC(2025, 4, 21, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 13, 0, 0)),
        location: "Hall A",
        type: "session4b",
        description: "Chair: John J Foxe",
        speakers: [
          {
            name: "Sophie Molholm ",
            affiliation: "Albert Einstein College of Medicine, USA",
            abstract:"https://is.gd/atRMN8",
            topic:
              "S23-01	Developing neuromarkers of disease progression and cognitive function in human patients with CTNS gene mutations (Cystinosis)	",
          },
          {
            name: "Illana Gozes ",
            affiliation: "Tel Aviv University, Israel",
            abstract:"https://is.gd/FM4dU5",
            topic:
              "S23-02	Sex-related efficacy in rare diseases: developing davunetide to treat individuals with mutations of the Activity-Dependent Neuroprotective Protein gene (ADNP), a rare monogenic variant of autism",
          },
          {
            name: "R. Anne McKinney ",
            affiliation: "Mc Gill University, Canada",
            abstract:"https://is.gd/aM7uvl",
            topic:
              "S23-03	Explorations of the molecular and cellular pathways associated with mutations of the SLC9A6 gene (Christianson Syndrome)",
          },
          {
            name: "John J Foxe",
            affiliation: "University of Rochester, USA",
            abstract:"https://is.gd/es8iGH",
            topic:
              "S23-04	Developing a common neurophysiological endophenotype (neuromarker) in both human patients and a mouse model with CLN3 gene mutations (Batten Disease)",
          },
        ],
      },
      {
        id: "s24",
        title:
          "S24 	Extracellular vesicles as hubs for neurotrophin signalling and function ",
        startTime: new Date(Date.UTC(2025, 4, 21, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 13, 0, 0)),
        location: "Hall B",
        type: "session4b",
        description:
          "Chair: Maria José Diógenes (University of Lisbon, Portugal)",
        speakers: [
          {
            name: "Laura Marchetti",
            affiliation: "University of Pisa, Italy",
            abstract:"https://is.gd/NDj4nb",
            topic:
              "S24-01	Targeted delivery of extracellular vesicles carrying RNA therapeutics: a novel role for neurotrophin receptors?",
          },
          {
            name: "Tiago Costa-Coelho",
            affiliation: "University of Lisbon, Portugal",
            abstract:"https://is.gd/28snnJ",
            topic:
              "S24-02	Loss of neuroprotection in Alzheimer’s disease: shedding light on BDNF receptor cleavage and its mirroring in extracellular vesicles",
          },
          {
            name: "Anna Antoniou",
            affiliation:
              "University of Bonn & German Center for Neurodegenerative Diseases Bonn, Germany",
            abstract:"https://is.gd/UXwS4D",
            topic:
              "S24-03	Trans-synaptic signaling via EV and microRNA cargo mediates BDNF-dependent neuronal circuit formation",
          },
          {
            name: "Cristina Malagelada",
            affiliation: "University of Barcelona, Spain",
            abstract:"https://is.gd/rBdav9",
            topic:
              "S24-04	Neuron-derived EVs contain synaptic proteins, promote spine formation, activate TrkB-mediated signalling and preserve neuronal complexity",
          },
        ],
      },
      {
        id: "s25",
        title: "S25 	Brains, models and pharmacology",
        startTime: new Date(Date.UTC(2025, 4, 21, 11, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 13, 0, 0)),
        location: "Hall C",
        type: "session4b",
        description: "Chair: Pavle Andjus (University of Belgrade)",
        speakers: [
          {
            name: "Srdjan Antic",
            affiliation: "University of Connecticut, USA",
            abstract:"https://is.gd/J6ELo0",
            topic:
              "S25-01	Studying physiological hallmarks of Alzheimer’s disease",
          },
          {
            name: "Fatima Abbas",
            affiliation: "Université Grenoble Alpes et CNRS, France",
            abstract:"https://is.gd/ML2olT",
            topic:
              "S25-02	The function of the voltage-gated sodium channel Nav1.2 in physiology and pathology",
          },
          {
            name: "Dinko Mitrečić",
            affiliation: "University of Zagreb, Croatia",
            abstract:"https://is.gd/Ql332c",
            topic:
              "S25-03	Application of human brain organoids in neurodegeneration research",
          },
          {
            name: "Ana Cindrić",
            affiliation: "Genos Glycoscience Research Laboratory, Zagreb, Croatia",
            abstract:"https://is.gd/BB6jUI",
            topic:
              "S25-04	Sweet disruptions: N-glycosylation alterations in neuronal differentiation and trisomy 21",
          },
        ],
      },
      {
        id: "closing",
        title: "Closing Ceremony",
        startTime: new Date(Date.UTC(2025, 4, 21, 13, 0, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 13, 30, 0)),
        type: "ceremony",
      },
      {
        id: "farewell-dinner",
        title: "Farewell Dinner",
        startTime: new Date(Date.UTC(2025, 4, 21, 15, 30, 0)),
        endTime: new Date(Date.UTC(2025, 4, 21, 17, 30, 0)),
        type: "ceremony",
      },
    ],
  };

  const getTime = (date: Date) => {
    date = new Date(date.toLocaleString("en", { timeZone: "Europe/Athens" }));
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const EventCard = ({ event }) => {
    const isExpanded = expandedEventId === event.id;

    return (
      <div
        className={`border rounded-lg overflow-hidden transition-all duration-200 ${
          eventTypes[event.type]
        }`}
      >
        <div
          className="p-4 cursor-pointer hover:bg-opacity-90"
          onClick={() => setExpandedEventId(isExpanded ? null : event.id)}
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{event.title}</h3>
                {event.speakers ? (
                  isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )
                ) : (
                  <div />
                )}
              </div>
              <p className="text-sm text-gray-600 flex items-center">
                <Clock className="inline-block h-4 w-4 mr-1" />
                {typeof event.endTime !== "string" &&
                  getTime(event.startTime)}{" "}
                - {typeof event.endTime !== "string" && getTime(event.endTime)}
              </p>
              {event.location && (
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="inline-block h-4 w-4 mr-1" />
                  {event.location}
                </p>
              )}
            </div>
            <AddToCalendarButton {...event} />
          </div>
        </div>

        {isExpanded && (event.description || event.speakers) && (
          <div className="px-4 pb-4 bg-white bg-opacity-50">
            <div className="pt-2 border-t">
              {event.description && (
                <div className="mb-2">
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              )}
              {event.speakers &&
                Array.isArray(event.speakers) &&
                event.speakers
                  .filter((s) => s.hasOwnProperty("name"))
                  .map((s) => (
                    <div className="mb-2">
                      <p className="text-sm font-medium">{s.abstract ? (<a href={s.abstract}>{s.topic}</a>) : s.topic}</p>
                      <p className="text-sm text-gray-600">
                        <u>{s.name}</u>
                      </p>
                      <p className="text-sm text-gray-600">{s.affiliation}</p>
                    </div>
                  ))}
              {event.details && (
                <div className="mb-2">
                  <p className="text-sm font-medium">Additional Information:</p>
                  <p className="text-sm text-gray-600">{event.details}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card>
        <CardContent>
          <Tabs defaultValue="may-18" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="may-18">Sunday 18</TabsTrigger>
              <TabsTrigger value="may-19">Monday 19</TabsTrigger>
              <TabsTrigger value="may-20">Tuesday 20</TabsTrigger>
              <TabsTrigger value="may-21">Wednesday 21</TabsTrigger>
            </TabsList>

            {Object.entries(events).map(([date, dayEvents]) => (
              <TabsContent key={date} value={date} className="space-y-4">
                {dayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SymposiumCalendar;