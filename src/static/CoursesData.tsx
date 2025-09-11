import type { ReactNode } from "react";
import {
  CodeSquare,
  Coins,
  Earth,
  Handshake,
  Lightbulb,
  PencilRuler,
  Settings,
  Sprout,
  Zap,
  type LucideIcon,
} from "lucide-react";

import {
  AnalysisSimulation,
  Audio,
  Biology,
  BioTechnology,
  CivilConstruction,
  Ecology,
  IndustrialProcess,
  InformationTechnology,
  Management,
  Materials,
  Math,
  Otimization,
  Plane,
  Physics,
  QualityControl,
  Chemistry,
  Art,
  Drawing,
  History,
  Music,
  MusicalTechnology,
  SustainableTechnologies,
  Hidraulic,
  ElectroMechanics,
  Electronics,
  Programming,
  Robotics,
  TeleCommunications,
  Network,
  ElectroTechnics,
  Rocket,
  Satellite,
  Computers,
  Games,
  Logic,
  InfrastructureTechnology,
  Computing,
  Automobile,
  ManufacturingProcesses,
} from "../pages/Home/_components/Pictograms/Affinities";
import {
  ReputationFive,
  ReputationFour,
} from "../pages/Home/_components/Pictograms/Reputations";
import {
  Accessibility,
  AdvancedManufacturing,
  AdvancedMaterialsIndustry,
  AerospacialIndustry,
  AerospacialMaterials,
  AerospacialPropulsion,
  AerospacialStructures,
  AgriculturalMachineryIndustry,
  AI,
  AircraftDesign,
  AppliedElectronics,
  ArchitecturalAcoustics,
  AudioTechonologyAcoustics,
  AutomationControl,
  AutomotiveIndustry,
  Avionics,
  BasicIndustryManufacturing,
  BI,
  BigDataInfrastructure,
  Biotechnology,
  BudgetingPlanningConstructionManagement,
  BuildingArchitecture,
  BuildingManagementExecution,
  CivilConstructionAction,
  CivilConstructionSector,
  CleanTechnologies,
  CloudComputing,
  ComputerNetworkInfrastructure,
  ComputerNetworking,
  ComputerNetworkingInternet,
  DatabaseAdministration,
  DataScience,
  DataTransmission,
  DistributedSystems,
  ElectroAcoustics,
  ElectronicsMicroelectronics,
  EletricalDronesAircraft,
  EletricalVehicles,
  EmbeddedSystems,
  EnergyDistributionTransmission,
  EnergyGeneration,
  EnergySector,
  EngineeringExpertiseAssessments,
  EnvironmentalAcoustics,
  EnvironmentalEducation,
  EnvironmentalManagement,
  EnvironmentalPlanning,
  EnvironmentalSanitation,
  EnvironmentSustainability,
  FinancialStrategicManagement,
  FlightDynamics,
  FoodBeverageIndustry,
  Geotechnics,
  GraphicComputing,
  HardwareDevelopment,
  HydraulicsWaterResources,
  IndustrialAcoustics,
  IndustrialChemicalProcesses,
  IndustrialProcessesOtimization,
  Industry4,
  IndustryAutomation,
  InformationSecurity,
  InfrastructurePlanning,
  InstrumentationSensing,
  InteriorArchitecture,
  IOT,
  JobSecurityManagement,
  Landscaping,
  LogisticManagement,
  MaterialsPolymersIndustry,
  NavigationControlSystems,
  NetworkSecurityCryptography,
  NoiseControl,
  OilGasPetrochemicalSector,
  OperationsManagement,
  OpticalFiber,
  PharmaceuticSector,
  PollutionControl,
  PotencySystems,
  ProcessesControl,
  ProcessesOtimization,
  ProductEngineering,
  ProductionManagement,
  ProjectProcessesManagement,
  ProjectsManagement,
  Psychoacoustics,
  QualityEngineering,
  RadioTelevisionBroadcasting,
  RenewableEnergy,
  RestorationHistoricalHeritage,
  RoadInfrastructure,
  RoboticsAction,
  RoboticsAutomation,
  SearchTeachingInnovation,
  SoftwareDevelopment,
  SolidWasteManagement,
  SpacialVehicleProjects,
  StructureDynamics,
  StructureEngineering,
  SupplyChain,
  SusteinableArchitecture,
  SystemAnalysisManagement,
  TelecommunicationsAction,
  TelecommunicationsInfrastructure,
  TelephonyMultimediaCommunications,
  TIGovernance,
  TransportLogistic,
  UrbanDesign,
  UrbanPlanning,
  VibrationControl,
  VR,
  WaterResourcesManagement,
  WirelessCommunicationSystems,
} from "../pages/Home/_components/Pictograms/Actions";

interface IAffinity {
  id: string;
  children: ReactNode;
}

interface IAction {
  id: string;
  children: ReactNode;
}

export interface ICourse {
  id: string;
  title: string;
  duration: string;
  reputation: ReactNode;
  affinities: IAffinity[];
  actions: IAction[];
}

interface IAdvantage {
  id: string;
  title: string;
  Icon: LucideIcon;
}

interface IChallenge {
  id: string;
  title: string;
}

export interface ICourses {
  id: string;
  title: string;
  introduction: string;
  service: string;
  advantages: IAdvantage[];
  challenges: IChallenge[];
  icon: LucideIcon;
  color: string;
  courses: ICourse[];
}

export const CoursesData: ICourses[] = [
  {
    id: "process",
    title: "Processos e Produtividade",
    introduction:
      "Profissionais desta área são responsáveis pelo desenvolvimento, otimização e gestão de processos produtivos, desde a fabricação de materiais químicos até a implementação de sistemas de gestão industrial.",
    service:
      "Desenvolvimento, otimização e gestão de processos produtivos, da fabricação de materiais químicos até a implementação de sistemas de gestão industrial.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e eficiência",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Tecnologia e Inovação (Nanotecnologia, IA e Biotecnologia)",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade e Meio Ambiente",
      },
      {
        id: "challenge-3",
        title: "Indústria 4.0 e Manufatura Inteligente",
      },
    ],
    icon: Settings,
    color: "process",
    courses: [
      {
        id: "process-1",
        title: "Engenharia de Produção",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <QualityControl /> },
          { id: "affinity-2", children: <Management /> },
          { id: "affinity-3", children: <Math /> },
          { id: "affinity-4", children: <Otimization /> },
          { id: "affinity-5", children: <IndustrialProcess /> },
        ],
        actions: [
          { id: "action-1", children: <ProductionManagement /> },
          { id: "action-2", children: <OperationsManagement /> },
          { id: "action-3", children: <LogisticManagement /> },
          { id: "action-4", children: <SupplyChain /> },
          { id: "action-5", children: <ProjectProcessesManagement /> },
          { id: "action-6", children: <ProductEngineering /> },
          { id: "action-7", children: <QualityEngineering /> },
          { id: "action-8", children: <FinancialStrategicManagement /> },
          { id: "action-9", children: <JobSecurityManagement /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "process-2",
        title: "Engenharia Química",
        duration: "10",
        reputation: <ReputationFive />,
        affinities: [
          { id: "affinity-1", children: <Biology /> },
          { id: "affinity-2", children: <BioTechnology /> },
          { id: "affinity-3", children: <Ecology /> },
          { id: "affinity-5", children: <Materials /> },
          { id: "affinity-6", children: <IndustrialProcess /> },
          { id: "affinity-7", children: <Chemistry /> },
        ],
        actions: [
          { id: "action-1", children: <IndustrialChemicalProcesses /> },
          { id: "action-2", children: <FoodBeverageIndustry /> },
          { id: "action-3", children: <Biotechnology /> },
          { id: "action-4", children: <EnergySector /> },
          { id: "action-5", children: <PharmaceuticSector /> },
          { id: "action-6", children: <OilGasPetrochemicalSector /> },
          { id: "action-7", children: <IndustrialProcessesOtimization /> },
          { id: "action-8", children: <MaterialsPolymersIndustry /> },
          { id: "action-9", children: <EnvironmentSustainability /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
    ],
  },

  {
    id: "ecosystem",
    title: "Ambientes e Ecossistemas",
    introduction:
      "Profissionais dessa área são responsáveis por projetar e construir estruturas que atendem às necessidades da sociedade, enquanto preservam e protegem o meio ambiente.",
    service:
      "Trabalha com a criação e manutenção de ambientes sustentáveis e funcionais que atendam às necessidades da sociedade enquanto preservam a natureza.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Urbanização",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade",
      },
      {
        id: "challenge-3",
        title: "Mudanças climáticas",
      },
      {
        id: "challenge-4",
        title: "Crescimento populacional",
      },
      {
        id: "challenge-5",
        title: "Inovação e competitividade",
      },
    ],
    icon: Sprout,
    color: "ecosystem",
    courses: [
      {
        id: "ecosystem-1",
        title: "Arquitetura e Urbanismo",
        duration: "10",
        reputation: <ReputationFive />,
        affinities: [
          { id: "affinity-1", children: <Art /> },
          { id: "affinity-2", children: <CivilConstruction /> },
          { id: "affinity-3", children: <Drawing /> },
          { id: "affinity-4", children: <History /> },
          { id: "affinity-5", children: <Math /> },
        ],
        actions: [
          { id: "action-1", children: <BuildingArchitecture /> },
          { id: "action-2", children: <UrbanPlanning /> },
          { id: "action-3", children: <InteriorArchitecture /> },
          { id: "action-4", children: <RestorationHistoricalHeritage /> },
          { id: "action-5", children: <SusteinableArchitecture /> },
          { id: "action-6", children: <Landscaping /> },
          { id: "action-7", children: <Accessibility /> },
          { id: "action-8", children: <BuildingManagementExecution /> },
          { id: "action-9", children: <UrbanDesign /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "ecosystem-2",
        title: "Engenharia Acústica",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <Audio /> },
          { id: "affinity-2", children: <Physics /> },
          { id: "affinity-3", children: <Math /> },
          { id: "affinity-4", children: <Music /> },
          { id: "affinity-5", children: <MusicalTechnology /> },
        ],
        actions: [
          { id: "action-1", children: <ArchitecturalAcoustics /> },
          { id: "action-2", children: <EnvironmentalAcoustics /> },
          { id: "action-3", children: <IndustrialAcoustics /> },
          { id: "action-4", children: <NoiseControl /> },
          { id: "action-5", children: <Psychoacoustics /> },
          { id: "action-6", children: <ElectroAcoustics /> },
          { id: "action-7", children: <AudioTechonologyAcoustics /> },
          { id: "action-8", children: <VibrationControl /> },
          { id: "action-9", children: <StructureDynamics /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "ecosystem-3",
        title: "Engenharia Ambiental e Sanitária",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <Biology /> },
          { id: "affinity-2", children: <Ecology /> },
          { id: "affinity-3", children: <Math /> },
          { id: "affinity-4", children: <Chemistry /> },
          { id: "affinity-5", children: <SustainableTechnologies /> },
        ],
        actions: [
          { id: "action-1", children: <WaterResourcesManagement /> },
          { id: "action-2", children: <EnvironmentalSanitation /> },
          { id: "action-3", children: <PollutionControl /> },
          { id: "action-4", children: <EnvironmentalManagement /> },
          { id: "action-5", children: <EnvironmentalPlanning /> },
          { id: "action-6", children: <SolidWasteManagement /> },
          { id: "action-7", children: <CleanTechnologies /> },
          { id: "action-8", children: <RenewableEnergy /> },
          { id: "action-9", children: <EnvironmentalEducation /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "ecosystem-4",
        title: "Engenharia Cívil",
        duration: "10",
        reputation: <ReputationFive />,
        affinities: [
          { id: "affinity-1", children: <CivilConstruction /> },
          { id: "affinity-2", children: <Physics /> },
          { id: "affinity-3", children: <Hidraulic /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <InfrastructureTechnology /> },
        ],
        actions: [
          { id: "action-1", children: <CivilConstructionAction /> },
          { id: "action-2", children: <InfrastructurePlanning /> },
          { id: "action-3", children: <Geotechnics /> },
          { id: "action-4", children: <HydraulicsWaterResources /> },
          { id: "action-5", children: <RoadInfrastructure /> },
          { id: "action-6", children: <StructureEngineering /> },
          { id: "action-7", children: <EnvironmentalSanitation /> },
          {
            id: "action-8",
            children: <BudgetingPlanningConstructionManagement />,
          },
          { id: "action-9", children: <EngineeringExpertiseAssessments /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
    ],
  },

  {
    id: "energy",
    title: "Energia e Comunicação",
    introduction:
      "Profissionais desta área são responsáveis por desenvolver e manter sistemas de energia, automação industrial e comunicação, que são essenciais para a infraestrutura moderna e a sociedade digital.",
    service:
      "Desenvolver e manter sistemas de energia, automação industrial e comunicação, que são essenciais para a infraestrutura moderna e a sociedade digital.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e conectividade",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Integração de Tecnologias Emergentes",
      },
      {
        id: "challenge-2",
        title: "Transição para Energias Renováveis",
      },
      {
        id: "challenge-3",
        title: "5G e Além",
      },
    ],
    icon: Zap,
    color: "energy",
    courses: [
      {
        id: "energy-1",
        title: "Engenharia de Controle e Automação",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <ElectroMechanics /> },
          { id: "affinity-2", children: <Electronics /> },
          { id: "affinity-3", children: <Math /> },
          { id: "affinity-4", children: <Programming /> },
          { id: "affinity-5", children: <Robotics /> },
        ],
        actions: [
          { id: "action-1", children: <RoboticsAction /> },
          { id: "action-2", children: <IndustryAutomation /> },
          { id: "action-3", children: <ProcessesControl /> },
          { id: "action-4", children: <InstrumentationSensing /> },
          { id: "action-5", children: <EmbeddedSystems /> },
          { id: "action-6", children: <AppliedElectronics /> },
          { id: "action-7", children: <AdvancedManufacturing /> },
          { id: "action-8", children: <Industry4 /> },
          { id: "action-9", children: <ProcessesOtimization /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "energy-2",
        title: "Engenharia de Telecomunicações",
        duration: "10",
        reputation: <ReputationFive />,
        affinities: [
          { id: "affinity-1", children: <Electronics /> },
          { id: "affinity-2", children: <Math /> },
          { id: "affinity-3", children: <Network /> },
          { id: "affinity-4", children: <InformationTechnology /> },
          { id: "affinity-5", children: <TeleCommunications /> },
        ],
        actions: [
          { id: "action-1", children: <ComputerNetworkingInternet /> },
          { id: "action-2", children: <WirelessCommunicationSystems /> },
          { id: "action-3", children: <TelephonyMultimediaCommunications /> },
          { id: "action-4", children: <OpticalFiber /> },
          { id: "action-5", children: <DataTransmission /> },
          { id: "action-6", children: <RadioTelevisionBroadcasting /> },
          { id: "action-7", children: <NetworkSecurityCryptography /> },
          { id: "action-8", children: <TelecommunicationsInfrastructure /> },
          { id: "action-9", children: <IOT /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "energy-3",
        title: "Engenharia Elétrica",
        duration: "10",
        reputation: <ReputationFive />,
        affinities: [
          { id: "affinity-1", children: <Computing /> },
          { id: "affinity-2", children: <Electronics /> },
          { id: "affinity-3", children: <ElectroTechnics /> },
          { id: "affinity-4", children: <Physics /> },
          { id: "affinity-5", children: <Math /> },
        ],
        actions: [
          { id: "action-1", children: <EnergyGeneration /> },
          { id: "action-2", children: <EnergyDistributionTransmission /> },
          { id: "action-3", children: <PotencySystems /> },
          { id: "action-4", children: <ElectronicsMicroelectronics /> },
          { id: "action-5", children: <TelecommunicationsAction /> },
          { id: "action-6", children: <RenewableEnergy /> },
          { id: "action-7", children: <EletricalVehicles /> },
          { id: "action-8", children: <EletricalDronesAircraft /> },
          { id: "action-9", children: <AutomationControl /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
    ],
  },

  {
    id: "project",
    title: "Projeto e Fabricação",
    introduction:
      "Profissionais desta área são responsáveis pelo desenvolvimento, design e manutenção de sistemas, máquinas e aeronaves que sustentam a infraestrutura e a mobilidade moderna.",
    service:
      "Desenvolvimento, design e manutenção de sistemas, máquinas e aeronaves que sustentam a infraestrutura e a mobilidade moderna. A área é fundamental para o avanço tecnológico e industrial.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e soluções tecnológicas",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Materiais Avançados",
      },
      {
        id: "challenge-2",
        title: "Sustentabilidade",
      },
      {
        id: "challenge-3",
        title: "Eficiência Energética",
      },
      {
        id: "challenge-4",
        title: "Aeronaves Supersônicas e Hipersônicas",
      },
      {
        id: "challenge-5",
        title: "Exploração Espacial",
      },
    ],
    icon: PencilRuler,
    color: "project",
    courses: [
      {
        id: "project-1",
        title: "Engenharia Aeroespacial",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <Plane /> },
          { id: "affinity-2", children: <Physics /> },
          { id: "affinity-3", children: <Rocket /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <Satellite /> },
        ],
        actions: [
          { id: "action-1", children: <AircraftDesign /> },
          { id: "action-2", children: <SpacialVehicleProjects /> },
          { id: "action-3", children: <AerospacialPropulsion /> },
          { id: "action-4", children: <EletricalDronesAircraft /> },
          { id: "action-5", children: <AerospacialMaterials /> },
          { id: "action-6", children: <AerospacialStructures /> },
          { id: "action-7", children: <Avionics /> },
          { id: "action-8", children: <FlightDynamics /> },
          { id: "action-9", children: <NavigationControlSystems /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "project-2",
        title: "Engenharia Mecânica",
        duration: "10",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <AnalysisSimulation /> },
          { id: "affinity-2", children: <Automobile /> },
          { id: "affinity-3", children: <Physics /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <ManufacturingProcesses /> },
        ],
        actions: [
          { id: "action-1", children: <BasicIndustryManufacturing /> },
          { id: "action-2", children: <AutomotiveIndustry /> },
          { id: "action-3", children: <AgriculturalMachineryIndustry /> },
          { id: "action-4", children: <EnergySector /> },
          { id: "action-5", children: <CivilConstructionSector /> },
          { id: "action-6", children: <TransportLogistic /> },
          { id: "action-7", children: <RoboticsAutomation /> },
          { id: "action-8", children: <AdvancedMaterialsIndustry /> },
          { id: "action-9", children: <AerospacialIndustry /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
    ],
  },

  {
    id: "tech",
    title: "Tecnologia da Informação",
    introduction:
      "Profissionais desta área são os arquitetos do futuro, desenvolvendo software, sistemas e redes que impulsionam a inovação e a eficiência em todos os setores da economia.",
    service:
      "Desenvolvimento e manutenção de softwares, sistemas e redes que impulsionam a inovação e a eficiência em todos os setores da economia.",
    advantages: [
      {
        id: "advantage-1",
        title: "Carreira internacional",
        Icon: Earth,
      },
      {
        id: "advantage-2",
        title: "Valorização profissional",
        Icon: Coins,
      },
      {
        id: "advantage-3",
        title: "Alta empregabilidade",
        Icon: Handshake,
      },
      {
        id: "advantage-4",
        title: "Inovação e soluções tecnológicas",
        Icon: Lightbulb,
      },
    ],
    challenges: [
      {
        id: "challenge-1",
        title: "Análise de Dados",
      },
      {
        id: "challenge-2",
        title: "Computação Quântica",
      },
      {
        id: "challenge-3",
        title: "Sistemas Autônomos",
      },
      {
        id: "challenge-4",
        title: "Privacidade",
      },
      {
        id: "challenge-5",
        title: "Segurança da Informação",
      },
      {
        id: "challenge-6",
        title: "Big Data",
      },
    ],
    icon: CodeSquare,
    color: "tech",
    courses: [
      {
        id: "tech-1",
        title: "Ciência da Computação",
        reputation: <ReputationFour />,
        duration: "8",
        affinities: [
          { id: "affinity-1", children: <Computers /> },
          { id: "affinity-2", children: <Games /> },
          { id: "affinity-3", children: <Logic /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <Programming /> },
        ],
        actions: [
          { id: "action-1", children: <SoftwareDevelopment /> },
          { id: "action-2", children: <DataScience /> },
          { id: "action-3", children: <AI /> },
          { id: "action-4", children: <InformationSecurity /> },
          { id: "action-5", children: <CloudComputing /> },
          { id: "action-6", children: <ComputerNetworking /> },
          { id: "action-7", children: <IOT /> },
          { id: "action-8", children: <GraphicComputing /> },
          { id: "action-9", children: <VR /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "tech-2",
        title: "Engenharia da Computação",
        reputation: <ReputationFour />,
        duration: "10",
        affinities: [
          { id: "affinity-1", children: <Computers /> },
          { id: "affinity-2", children: <Electronics /> },
          { id: "affinity-3", children: <Logic /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <Programming /> },
        ],
        actions: [
          { id: "action-1", children: <HardwareDevelopment /> },
          { id: "action-2", children: <EmbeddedSystems /> },
          { id: "action-3", children: <SoftwareDevelopment /> },
          { id: "action-4", children: <ComputerNetworkInfrastructure /> },
          { id: "action-5", children: <TelecommunicationsInfrastructure /> },
          { id: "action-6", children: <AI /> },
          { id: "action-7", children: <BigDataInfrastructure /> },
          { id: "action-8", children: <IOT /> },
          { id: "action-9", children: <DistributedSystems /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
      {
        id: "tech-3",
        title: "Sistemas de Informação",
        duration: "8",
        reputation: <ReputationFour />,
        affinities: [
          { id: "affinity-1", children: <Computers /> },
          { id: "affinity-2", children: <Games /> },
          { id: "affinity-3", children: <Logic /> },
          { id: "affinity-4", children: <Math /> },
          { id: "affinity-5", children: <Programming /> },
        ],
        actions: [
          { id: "action-1", children: <SoftwareDevelopment /> },
          { id: "action-2", children: <DatabaseAdministration /> },
          { id: "action-3", children: <SystemAnalysisManagement /> },
          { id: "action-4", children: <BI /> },
          { id: "action-5", children: <AI /> },
          { id: "action-6", children: <TIGovernance /> },
          { id: "action-7", children: <ProjectsManagement /> },
          { id: "action-8", children: <InformationSecurity /> },
          { id: "action-9", children: <DataScience /> },
          { id: "action-10", children: <SearchTeachingInnovation /> },
        ],
      },
    ],
  },
];
