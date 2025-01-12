'use client';

import React, { useState, FormEvent } from 'react';
import { ClientMotionDiv } from './home_assets/ClientMotion';
import { FaClipboardList } from 'react-icons/fa';
import { 
  ThemedContainer, 
  ThemedMotionContainer,
  ThemedH1, 
  ThemedH2, 
  ThemedH3, 
  ThemedP, 
  ThemedInput, 
  ThemedTextarea, 
  ThemedButton, 
  ThemedLabel 
} from './ThemedComponents';

interface RIACTFormData {
  scope: string;
  otherScope: string;
  riskType: string;
  criticalAsset: string;
  riskAcceptanceCriteria: string;
  disasterRisk: string;
  assetSystem: {
    asset1: string;
    asset2: string;
    asset3: string;
  };
  likelihoodAssessment: {
    hazard1: string;
    hazard2: string;
  };
  impactAssessment: {
    impact1: string;
    impact2: string;
  };
  priorityActions: {
    action1: string;
    action2: string;
  };
  peraStages: {
    prepare: string;
    endure: string;
    recover: string;
    adapt: string;
  };
  riskTreatment: {
    options: string[];
    details: string;
    crpBalance: string;
  };
  documentation: string;
  reportingChannels: string;
  communicationPlan: string;
  monitoringReview: string;
  riskContext: string;
}

export const RIACTForm: React.FC = () => {
  const [formData, setFormData] = useState<RIACTFormData>({
    scope: '',
    otherScope: '',
    riskType: '',
    criticalAsset: '',
    riskAcceptanceCriteria: '',
    disasterRisk: '',
    assetSystem: {
      asset1: '',
      asset2: '',
      asset3: '',
    },
    likelihoodAssessment: {
      hazard1: '',
      hazard2: '',
    },
    impactAssessment: {
      impact1: '',
      impact2: '',
    },
    priorityActions: {
      action1: '',
      action2: '',
    },
    peraStages: {
      prepare: '',
      endure: '',
      recover: '',
      adapt: '',
    },
    riskTreatment: {
      options: [],
      details: '',
      crpBalance: '',
    },
    documentation: '',
    reportingChannels: '',
    communicationPlan: '',
    monitoringReview: '',
    riskContext: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkboxInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        riskTreatment: {
          ...prev.riskTreatment,
          options: checkboxInput.checked
            ? [...prev.riskTreatment.options, value]
            : prev.riskTreatment.options.filter(option => option !== value)
        }
      }));
    } else {
      const nameParts = name.split('.');
      if (nameParts.length > 1) {
        const [parentKey, childKey] = nameParts;
        setFormData(prev => {
          // Check if the parent key exists and is an object
          if (typeof prev[parentKey as keyof RIACTFormData] === 'object' && prev[parentKey as keyof RIACTFormData] !== null) {
            return {
              ...prev,
              [parentKey]: {
                ...(prev[parentKey as keyof RIACTFormData] as object),
                [childKey]: value
              }
            };
          }
          // If not an object, just update the key directly
          return {
            ...prev,
            [parentKey]: value
          };
        });
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('RIACT Form Submitted:', formData);
    alert('Thank you for submitting the RIACT form. We will review your submission.');
  };

  return (
    <ClientMotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-xl rounded-lg p-8 mt-12"
    >
      <div className="flex items-center mb-8">
        <FaClipboardList className="text-4xl text-green-600 mr-4" />
        <ThemedH2 className="text-3xl font-bold text-green-600">
          Risk Identification, Assessment, and Treatment (RIACT) Form
        </ThemedH2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Scope, Context, and Criteria */}
        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">1. Scope, Context, and Criteria</ThemedH3>
          
          <div className="mb-4">
            <ThemedLabel className="block mb-2 font-medium">Scope:</ThemedLabel>
            <div className="grid grid-cols-2 gap-4">
              {['Continent-Level', 'Country-Level', 'City-Level', 'Municipality-Level'].map((level) => (
                <label key={level} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="scope"
                    value={level}
                    checked={formData.scope === level}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {level}
                </label>
              ))}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="scope"
                  value="Other"
                  checked={formData.scope === 'Other'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other (specify):
                <ThemedInput
                  type="text"
                  name="otherScope"
                  value={formData.otherScope}
                  onChange={handleChange}
                  className="ml-2 border rounded px-2 py-1"
                  disabled={formData.scope !== 'Other'}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ThemedLabel className="block mb-2 font-medium">Type of Risk:</ThemedLabel>
              <ThemedInput
                type="text"
                name="riskType"
                value={formData.riskType}
                onChange={handleChange}
                placeholder="e.g., Flood, Fire"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <ThemedLabel className="block mb-2 font-medium">Critical Asset(s):</ThemedLabel>
              <ThemedInput
                type="text"
                name="criticalAsset"
                value={formData.criticalAsset}
                onChange={handleChange}
                placeholder="e.g., Bridge, Building"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <ThemedLabel className="block mb-2 font-medium">Risk Acceptance Criteria:</ThemedLabel>
            <ThemedTextarea
              name="riskAcceptanceCriteria"
              value={formData.riskAcceptanceCriteria}
              onChange={handleChange}
              placeholder="Specify tolerable economic loss, service downtime, etc."
              className="w-full border rounded px-3 py-2 h-24"
            />
          </div>
        </ThemedContainer>

        {/* 2. Identification */}
        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">2. Identification</ThemedH3>
          
          <div className="mb-4">
            <ThemedLabel className="block mb-2 font-medium">Disaster Risk or Hazard:</ThemedLabel>
            <ThemedInput
              type="text"
              name="disasterRisk"
              value={formData.disasterRisk}
              onChange={handleChange}
              placeholder="Identify primary hazards"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <ThemedLabel className="block mb-2 font-medium">Asset System Exposure:</ThemedLabel>
            <div className="grid md:grid-cols-3 gap-4">
              {['asset1', 'asset2', 'asset3'].map((asset, index) => (
                <div key={asset}>
                  <ThemedLabel className="block mb-1">Asset {index + 1}:</ThemedLabel>
                  <ThemedInput
                    type="text"
                    name={`assetSystem.${asset}`}
                    value={formData.assetSystem[asset as keyof typeof formData.assetSystem]}
                    onChange={handleChange}
                    placeholder={`Details for Asset ${index + 1}`}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </ThemedContainer>

        {/* 3. Analysis */}
        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">3. Analysis</ThemedH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Likelihood Assessment */}
            <div>
              <ThemedLabel className="block text-lg font-medium text-gray-600 mb-2">
                Likelihood Assessment
              </ThemedLabel>
              <ThemedInput
                type="text"
                name="likelihoodAssessment.hazard1"
                placeholder="Hazard 1 Probability (e.g., 30% chance of flooding per year)"
                value={formData.likelihoodAssessment.hazard1}
                onChange={handleChange}
                className="w-full mb-4"
              />
              <ThemedInput
                type="text"
                name="likelihoodAssessment.hazard2"
                placeholder="Hazard 2 Probability"
                value={formData.likelihoodAssessment.hazard2}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Impact Assessment */}
            <div>
              <ThemedLabel className="block text-lg font-medium text-gray-600 mb-2">
                Impact Assessment
              </ThemedLabel>
              <ThemedInput
                type="text"
                name="impactAssessment.impact1"
                placeholder="Impact 1 (e.g., economic loss of $2M)"
                value={formData.impactAssessment.impact1}
                onChange={handleChange}
                className="w-full mb-4"
              />
              <ThemedInput
                type="text"
                name="impactAssessment.impact2"
                placeholder="Impact 2 (e.g., infrastructure downtime)"
                value={formData.impactAssessment.impact2}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-6">
            <ThemedLabel className="block text-lg font-medium text-gray-600 mb-2">
              Additional Risk Context
            </ThemedLabel>
            <ThemedTextarea
              name="riskContext"
              placeholder="Provide any additional context or nuanced details about the risks and their potential impacts"
              value={formData.riskContext}
              onChange={handleChange}
              className="w-full h-24"
            />
          </div>
        </ThemedContainer>

        {/* 4. Evaluation */}
        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">4. Evaluation</ThemedH3>
          
          <div className="mb-4">
            <ThemedLabel className="block mb-2 font-medium">Priority and Necessary Actions:</ThemedLabel>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ThemedLabel className="block mb-1">Action 1:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="priorityActions.action1"
                  value={formData.priorityActions.action1}
                  onChange={handleChange}
                  placeholder="Immediate or long-term action"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <ThemedLabel className="block mb-1">Action 2:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="priorityActions.action2"
                  value={formData.priorityActions.action2}
                  onChange={handleChange}
                  placeholder="Immediate or long-term action"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div>
            <ThemedLabel className="block mb-2 font-medium">PERA Stage Categorization:</ThemedLabel>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <ThemedLabel className="block mb-1">Prepare:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="peraStages.prepare"
                  value={formData.peraStages.prepare}
                  onChange={handleChange}
                  placeholder="e.g., develop early warning systems"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <ThemedLabel className="block mb-1">Endure:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="peraStages.endure"
                  value={formData.peraStages.endure}
                  onChange={handleChange}
                  placeholder="e.g., ensure backup power supply"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <ThemedLabel className="block mb-1">Recover:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="peraStages.recover"
                  value={formData.peraStages.recover}
                  onChange={handleChange}
                  placeholder="e.g., restore critical services"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <ThemedLabel className="block mb-1">Adapt:</ThemedLabel>
                <ThemedInput
                  type="text"
                  name="peraStages.adapt"
                  value={formData.peraStages.adapt}
                  onChange={handleChange}
                  placeholder="e.g., revise infrastructure codes"
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        </ThemedContainer>

        {/* 5. Treatment */}
        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">5. Treatment</ThemedH3>
          <div className="mb-4">
            <ThemedLabel className="block mb-2 font-medium">Risk Management Options:</ThemedLabel>
            <div className="grid md:grid-cols-2 gap-4">
              {['Mitigation', 'Transfer', 'Acceptance', 'Avoidance'].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="riskTreatment.options"
                    value={option}
                    checked={formData.riskTreatment.options.includes(option)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div>
            <ThemedLabel className="block mb-2 font-medium">Details of Treatment:</ThemedLabel>
            <ThemedTextarea
              name="riskTreatment.details"
              value={formData.riskTreatment.details}
              onChange={handleChange}
              placeholder="Provide details of chosen treatment options"
              className="w-full border rounded px-3 py-2 h-24"
            />
          </div>
          <div>
            <ThemedLabel className="block mb-2 font-medium">CRP Balance:</ThemedLabel>
            <ThemedInput
              type="text"
              name="riskTreatment.crpBalance"
              value={formData.riskTreatment.crpBalance}
              onChange={handleChange}
              placeholder="Provide CRP balance details"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </ThemedContainer>

        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">6. Recording and Reporting</ThemedH3>
          <div>
            <ThemedLabel className="block mb-2 font-medium">Documentation:</ThemedLabel>
            <ThemedTextarea
              name="documentation"
              value={formData.documentation}
              onChange={handleChange}
              placeholder="Provide documentation details"
              className="w-full border rounded px-3 py-2 h-24"
            />
          </div>
          <div>
            <ThemedLabel className="block mb-2 font-medium">Reporting Channels:</ThemedLabel>
            <ThemedInput
              type="text"
              name="reportingChannels"
              value={formData.reportingChannels}
              onChange={handleChange}
              placeholder="Provide reporting channels details"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </ThemedContainer>

        <ThemedContainer className="bg-gray-50 p-6 rounded-lg">
          <ThemedH3 className="text-2xl font-semibold mb-4 text-gray-700">7. Communication and Monitoring</ThemedH3>
          <div>
            <ThemedLabel className="block mb-2 font-medium">Communication Plan:</ThemedLabel>
            <ThemedTextarea
              name="communicationPlan"
              value={formData.communicationPlan}
              onChange={handleChange}
              placeholder="Provide communication plan details"
              className="w-full border rounded px-3 py-2 h-24"
            />
          </div>
          <div>
            <ThemedLabel className="block mb-2 font-medium">Monitoring and Review:</ThemedLabel>
            <ThemedInput
              type="text"
              name="monitoringReview"
              value={formData.monitoringReview}
              onChange={handleChange}
              placeholder="Provide monitoring and review details"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </ThemedContainer>

        <div className="text-center">
          <ThemedButton
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold"
          >
            Submit RIACT Form
          </ThemedButton>
        </div>
      </form>
    </ClientMotionDiv>
  );
};
