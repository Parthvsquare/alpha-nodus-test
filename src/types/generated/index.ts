import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Appointment = {
  basedOn?: Maybe<Scalars['String']['output']>;
  bookedStamp?: Maybe<Scalars['String']['output']>;
  cancelationReason?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  coverageList?: Maybe<CoverageQueryListResponse>;
  created?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  endTime?: Maybe<Scalars['String']['output']>;
  generated?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  metadata?: Maybe<AppointmentMetadata>;
  minutesDuration?: Maybe<Scalars['Float']['output']>;
  patient: Scalars['String']['output'];
  patientInstruction?: Maybe<Scalars['String']['output']>;
  patientRead?: Maybe<PatientQueryReadResponse>;
  pendingBooking?: Maybe<AppointmentReschedule>;
  priorAuthList?: Maybe<PriorAuthQueryListResponse>;
  reasonCode?: Maybe<AppointmentReasonCode>;
  serviceCategory?: Maybe<AppointmentServiceCategory>;
  serviceType: AppointmentServiceType;
  slot?: Maybe<Scalars['String']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  status?: Maybe<AppointmentStatus>;
  statusStamp?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  textOutreachList?: Maybe<TextOutreachQueryListResponse>;
  updated?: Maybe<Scalars['String']['output']>;
  visit: Scalars['String']['output'];
};


export type AppointmentcoverageListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type AppointmenttextOutreachListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type AppointmentHistoryQueryMetricResponse = {
  resource?: Maybe<AppointmentMetrics>;
  resources?: Maybe<Array<Maybe<AppointmentMetrics>>>;
};

export type AppointmentMetadata = {
  authEndDate?: Maybe<Scalars['String']['output']>;
  authStartDate?: Maybe<Scalars['String']['output']>;
  authStatus?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastCompletedOn?: Maybe<Scalars['String']['output']>;
};

export type AppointmentMetadataInput = {
  authEndDate?: InputMaybe<Scalars['String']['input']>;
  authStartDate?: InputMaybe<Scalars['String']['input']>;
  authStatus?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastCompletedOn?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentMetrics = {
  date?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  modality?: Maybe<Scalars['String']['output']>;
  occurrences?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
};

export type AppointmentPatchInput = {
  basedOn?: InputMaybe<Scalars['String']['input']>;
  bookedStamp?: InputMaybe<Scalars['String']['input']>;
  cancelationReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  generated?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<AppointmentMetadataInput>;
  minutesDuration?: InputMaybe<Scalars['Float']['input']>;
  patient?: InputMaybe<Scalars['String']['input']>;
  patientInstruction?: InputMaybe<Scalars['String']['input']>;
  pendingBooking?: InputMaybe<AppointmentRescheduleInput>;
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType?: InputMaybe<AppointmentServiceTypeInput>;
  slot?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AppointmentStatus>;
  statusStamp?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<Appointment>>;
};

export type AppointmentQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Appointment;
};

export type AppointmentReasonCode = {
  coding?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type AppointmentReasonCodeInput = {
  coding?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentReschedule = {
  appointment: Scalars['String']['output'];
  created?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['String']['output'];
  id: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
  status: AppointmentRescheduleStatus;
  tenant: Scalars['String']['output'];
};

export type AppointmentRescheduleInput = {
  appointment: Scalars['String']['input'];
  created?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['String']['input'];
  id: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
  status: AppointmentRescheduleStatus;
  tenant: Scalars['String']['input'];
};

export type AppointmentRescheduleQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<AppointmentReschedule>>;
};

export type AppointmentRescheduleRequestInput = {
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export enum AppointmentRescheduleStatus {
  booked = 'booked',
  canceled = 'canceled',
  pending = 'pending'
}

export type AppointmentServiceCategory = {
  coding?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type AppointmentServiceCategoryInput = {
  coding?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentServiceType = {
  coding: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type AppointmentServiceTypeInput = {
  coding: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum AppointmentStatus {
  arrived = 'arrived',
  booked = 'booked',
  bookingPending = 'bookingPending',
  canceled = 'canceled',
  checked_in = 'checked_in',
  completed = 'completed',
  pending = 'pending'
}

export enum AppointmentStatus2 {
  arrived = 'arrived',
  booked = 'booked',
  bookingPending = 'bookingPending',
  canceled = 'canceled',
  checked_in = 'checked_in',
  completed = 'completed',
  pending = 'pending'
}

export type AppointmentWriteInput = {
  basedOn?: InputMaybe<Scalars['String']['input']>;
  bookedStamp?: InputMaybe<Scalars['String']['input']>;
  cancelationReason?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  generated?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<AppointmentMetadataInput>;
  minutesDuration?: InputMaybe<Scalars['Float']['input']>;
  patient?: InputMaybe<Scalars['String']['input']>;
  patientInstruction?: InputMaybe<Scalars['String']['input']>;
  pendingBooking?: InputMaybe<AppointmentRescheduleInput>;
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType: AppointmentServiceTypeInput;
  slot?: InputMaybe<Scalars['String']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AppointmentStatus>;
  statusStamp?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit: Scalars['String']['input'];
};

export type AthenaTokenRequestInput = {
  tenant: Scalars['String']['input'];
};

export type AthenaTokenResponse = {
  accessToken: Scalars['String']['output'];
  expiresIn?: Maybe<Scalars['Float']['output']>;
  stage: AthenaTokenResponseStage;
};

export enum AthenaTokenResponseStage {
  preview = 'preview',
  production = 'production'
}

export enum AuthStatus {
  action_required = 'action_required',
  complete = 'complete',
  failed = 'failed',
  pending = 'pending',
  running = 'running'
}

export type CodeSystem = {
  coding?: Maybe<Array<Maybe<CodeSystemCoding>>>;
  created?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  system: Scalars['String']['output'];
  systemType?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type CodeSystemCoding = {
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type CodeSystemCodingInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type CodeSystemCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type CodeSystemInput = {
  coding?: InputMaybe<Array<InputMaybe<CodeSystemCodingInput>>>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  system: Scalars['String']['input'];
  systemType?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type CodeSystemQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<CodeSystem>>;
};

export type CodeSystemQueryReadResponse = {
  resource: CodeSystem;
};

export type CodingQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<CodeSystemCoding>>;
};

export type CodingQueryReadResponse = {
  resource: CodeSystemCoding;
};

export type Coverage2 = {
  beneficiary?: Maybe<Scalars['String']['output']>;
  benefits?: Maybe<CoverageSchemaBenefits>;
  coverageCheckedAt?: Maybe<Scalars['String']['output']>;
  groupNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  payor?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CoverageStatus>;
  subscriberId?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  visit?: Maybe<Scalars['String']['output']>;
};

export type CoverageBenefitsItem = {
  benefits?: Maybe<Scalars['JSON']['output']>;
  payorId?: Maybe<Scalars['String']['output']>;
};

export type CoverageBenefitsResponse = {
  id?: Maybe<Scalars['String']['output']>;
  resource?: Maybe<CoverageBenefitsItem>;
};

export type CoverageCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export enum CoverageEbvInputAuthError {
  CasePending = 'CasePending',
  ClinicalsRequired = 'ClinicalsRequired',
  LoginError = 'LoginError',
  MissingInformationError = 'MissingInformationError',
  NetworkError = 'NetworkError',
  UnknownError = 'UnknownError'
}

export enum CoverageEbvInputAuthResult {
  CaseAuthorized = 'CaseAuthorized',
  CaseDenied = 'CaseDenied',
  CaseNotStarted = 'CaseNotStarted',
  CaseNotSupported = 'CaseNotSupported',
  CaseP2P = 'CaseP2P'
}

export enum CoverageEbvInputAuthStatus {
  complete = 'complete',
  failed = 'failed',
  pending = 'pending',
  running = 'running'
}

export type CoverageEbvInputCoverageItemInput = {
  id: Scalars['String']['input'];
};

export type CoverageEbvInputInput = {
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  authError?: InputMaybe<CoverageEbvInputAuthError>;
  authNumber?: InputMaybe<Scalars['String']['input']>;
  authResult?: InputMaybe<CoverageEbvInputAuthResult>;
  authStatus?: InputMaybe<CoverageEbvInputAuthStatus>;
  coverage: Array<InputMaybe<CoverageEbvInputCoverageItemInput>>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  patientId: Scalars['String']['input'];
  practitioner?: InputMaybe<CoverageEbvInputPractitionerInput>;
  serviceType?: InputMaybe<CoverageEbvInputServiceTypeInput>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  updateStatus?: InputMaybe<CoverageEbvInputUpdateStatus>;
  visit: Scalars['String']['input'];
};

export type CoverageEbvInputPractitionerInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CoverageEbvInputServiceTypeInput = {
  coding: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum CoverageEbvInputUpdateStatus {
  complete = 'complete',
  failed = 'failed',
  none = 'none'
}

export type CoverageEbvResult = {
  auth: CoverageEbvResultAuth;
};

export enum CoverageEbvResultAuth {
  no_prior_auth_required = 'no_prior_auth_required',
  prior_auth_required = 'prior_auth_required'
}

export type CoverageEdi = {
  data?: Maybe<Scalars['JSON']['output']>;
  payorId?: Maybe<Scalars['String']['output']>;
  soapData?: Maybe<Scalars['String']['output']>;
};

export type CoverageEdiResponse = {
  id?: Maybe<Scalars['String']['output']>;
  resources?: Maybe<Array<Maybe<CoverageEdi>>>;
};

export type CoverageInitiateInput = {
  forceInitiate?: InputMaybe<Scalars['Boolean']['input']>;
  isAvailityRest?: InputMaybe<Scalars['Boolean']['input']>;
  isBenefitsCheck?: InputMaybe<Scalars['Boolean']['input']>;
  placeOfService?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
};

export type CoverageMetrics = {
  benefits?: Maybe<Scalars['Float']['output']>;
  coverageIds?: Maybe<Scalars['JSON']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  occurrences?: Maybe<Scalars['Float']['output']>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  payor?: Maybe<Scalars['String']['output']>;
  payorNotActivated?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
};

export type CoverageMetricsListResponse = {
  resources?: Maybe<Array<Maybe<CoverageMetrics>>>;
};

export type CoveragePatchInput = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CoverageSchemaBenefitsInput>;
  coverageCheckedAt?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CoverageStatus>;
  subscriberId?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type CoveragePutInput = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<CoverageSchemaBenefitsInput>;
  coverageCheckedAt?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<CoverageStatus>;
  subscriberId?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type CoverageQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<Coverage2>>;
};

export type CoverageQueryListTransactionResponse = {
  pages?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Array<Maybe<CoverageTransactions>>>;
};

export type CoverageQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Coverage2;
};

export type CoverageQueryReadTransactionResponse = {
  id: Scalars['String']['output'];
  resource: CoverageTransactions;
};

export type CoverageSchemaBenefits = {
  coInsurance?: Maybe<Scalars['Float']['output']>;
  coPayment?: Maybe<Scalars['Float']['output']>;
  estimatedDeductibles?: Maybe<Scalars['Float']['output']>;
  estimatedOutOfPocket?: Maybe<Scalars['Float']['output']>;
  totalDeductibles?: Maybe<Scalars['Float']['output']>;
  totalOutOfPocket?: Maybe<Scalars['Float']['output']>;
};

export type CoverageSchemaBenefitsInput = {
  coInsurance?: InputMaybe<Scalars['Float']['input']>;
  coPayment?: InputMaybe<Scalars['Float']['input']>;
  estimatedDeductibles?: InputMaybe<Scalars['Float']['input']>;
  estimatedOutOfPocket?: InputMaybe<Scalars['Float']['input']>;
  totalDeductibles?: InputMaybe<Scalars['Float']['input']>;
  totalOutOfPocket?: InputMaybe<Scalars['Float']['input']>;
};

export enum CoverageStatus {
  ActiveCoverage = 'ActiveCoverage',
  Error = 'Error',
  InTransition = 'InTransition',
  Initiated = 'Initiated',
  NoCoverage = 'NoCoverage',
  PayorNotActivated = 'PayorNotActivated',
  Pending = 'Pending'
}

export enum CoverageStatus2 {
  ActiveCoverage = 'ActiveCoverage',
  Error = 'Error',
  InTransition = 'InTransition',
  Initiated = 'Initiated',
  NoCoverage = 'NoCoverage',
  PayorNotActivated = 'PayorNotActivated',
  Pending = 'Pending'
}

export type CoverageTransactions = {
  coverageId?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  initiatedBy?: Maybe<Scalars['String']['output']>;
  payorId?: Maybe<Scalars['String']['output']>;
  requestJson?: Maybe<Scalars['JSON']['output']>;
  responseEdi?: Maybe<Scalars['JSON']['output']>;
  responseJson?: Maybe<Scalars['JSON']['output']>;
  serviceType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<CoverageStatus>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type Device = {
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  manufacturer: Scalars['String']['output'];
  metadata?: Maybe<DeviceMetadata>;
  name: DeviceName;
  note?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  status?: Maybe<DeviceStatus>;
  statusReason?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type DeviceCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type DeviceMetadata = {
  defaultDurationMinutes?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modality?: Maybe<Scalars['String']['output']>;
  nudgeable?: Maybe<Scalars['Boolean']['output']>;
};

export type DeviceMetadataInput = {
  defaultDurationMinutes?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modality?: InputMaybe<Scalars['String']['input']>;
  nudgeable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeviceName = {
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type DeviceNameInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type DevicePatchInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<DeviceMetadataInput>;
  name?: InputMaybe<DeviceNameInput>;
  note?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DeviceStatus>;
  statusReason?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type DeviceQueryListResponse = {
  pages?: Maybe<Scalars['Float']['output']>;
  resources?: Maybe<Array<Maybe<Device>>>;
};

export type DeviceQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Device;
};

export type DeviceServiceDuration = {
  created?: Maybe<Scalars['String']['output']>;
  durationMinutes: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  nudgeEligible?: Maybe<Scalars['Boolean']['output']>;
  parentId: Scalars['String']['output'];
  serviceCategory?: Maybe<Scalars['String']['output']>;
  serviceTypeCode: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
};

export type DeviceServiceDurationCreateInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  durationMinutes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  nudgeEligible?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<Scalars['String']['input']>;
  serviceTypeCode: Scalars['String']['input'];
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceServiceDurationPatchInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  durationMinutes?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  nudgeEligible?: InputMaybe<Scalars['Boolean']['input']>;
  parentId: Scalars['String']['input'];
  serviceCategory?: InputMaybe<Scalars['String']['input']>;
  serviceTypeCode: Scalars['String']['input'];
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceServiceDurationQueryListResponse = {
  pages?: Maybe<Scalars['Float']['output']>;
  resources?: Maybe<Array<Maybe<DeviceServiceDuration>>>;
};

export type DeviceServiceDurationQueryReadResponse = {
  resource: DeviceServiceDuration;
  serviceTypeCode: Scalars['String']['output'];
};

export enum DeviceStatus {
  active = 'active',
  entered_in_error = 'entered_in_error',
  inactive = 'inactive',
  unknown = 'unknown'
}

export type DeviceWriteInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  manufacturer: Scalars['String']['input'];
  metadata?: InputMaybe<DeviceMetadataInput>;
  name: DeviceNameInput;
  note?: InputMaybe<Scalars['String']['input']>;
  owner: Scalars['String']['input'];
  status?: InputMaybe<DeviceStatus>;
  statusReason?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export enum DimensionDate {
  appointmentStart = 'appointmentStart',
  initiated = 'initiated'
}

export type Document = {
  actionRequired?: Maybe<Scalars['Boolean']['output']>;
  appointment?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  documentType?: Maybe<Scalars['String']['output']>;
  extractFile?: Maybe<Scalars['String']['output']>;
  extractStatus?: Maybe<Scalars['String']['output']>;
  extractText?: Maybe<Scalars['String']['output']>;
  file: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  outboundFaxes?: Maybe<Array<Maybe<DocumentOutboundFaxes>>>;
  patient?: Maybe<Scalars['String']['output']>;
  patientBirthDate?: Maybe<Scalars['String']['output']>;
  patientFirstName?: Maybe<Scalars['String']['output']>;
  patientLastName?: Maybe<Scalars['String']['output']>;
  patientPhoneNumber?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  visit?: Maybe<Scalars['String']['output']>;
};

export type DocumentCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type DocumentCreateInput = {
  actionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  appointment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['String']['input']>;
  extractFile?: InputMaybe<Scalars['String']['input']>;
  extractStatus?: InputMaybe<Scalars['String']['input']>;
  extractText?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars['String']['input']>;
  patientBirthDate?: InputMaybe<Scalars['String']['input']>;
  patientFirstName?: InputMaybe<Scalars['String']['input']>;
  patientLastName?: InputMaybe<Scalars['String']['input']>;
  patientPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentFaxInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<DocumentInput>;
  documentId: Scalars['String']['input'];
  faxNumber: Scalars['String']['input'];
  faxReferenceId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mockScenarioId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DocumentFaxStatus>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentFaxResponse = {
  resourceID?: Maybe<Scalars['String']['output']>;
};

export enum DocumentFaxStatus {
  failed = 'failed',
  initiated = 'initiated',
  success = 'success',
  transmitting = 'transmitting'
}

export type DocumentInput = {
  actionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  appointment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['String']['input']>;
  extractFile?: InputMaybe<Scalars['String']['input']>;
  extractStatus?: InputMaybe<Scalars['String']['input']>;
  extractText?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars['String']['input']>;
  patientBirthDate?: InputMaybe<Scalars['String']['input']>;
  patientFirstName?: InputMaybe<Scalars['String']['input']>;
  patientLastName?: InputMaybe<Scalars['String']['input']>;
  patientPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentOutboundFaxes = {
  comments?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  documentId?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  faxReferenceId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DocumentOutboundFaxesStatus>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type DocumentOutboundFaxesInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  faxReferenceId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DocumentOutboundFaxesStatus>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export enum DocumentOutboundFaxesStatus {
  failed = 'failed',
  initiated = 'initiated',
  success = 'success',
  transmitting = 'transmitting'
}

export type DocumentPatchInput = {
  actionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  appointment?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['String']['input']>;
  extractFile?: InputMaybe<Scalars['String']['input']>;
  extractStatus?: InputMaybe<Scalars['String']['input']>;
  extractText?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  outboundFaxes?: InputMaybe<Array<InputMaybe<DocumentOutboundFaxesInput>>>;
  patient?: InputMaybe<Scalars['String']['input']>;
  patientBirthDate?: InputMaybe<Scalars['String']['input']>;
  patientFirstName?: InputMaybe<Scalars['String']['input']>;
  patientLastName?: InputMaybe<Scalars['String']['input']>;
  patientPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<Document>>;
};

export type DocumentQueryReadImage = {
  resource: Scalars['String']['output'];
};

export type DocumentQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Document;
};

export type DownloadDesktop = {
  date: Scalars['String']['output'];
  sha512: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type EpicTokenResponse = {
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Float']['output'];
  scope: Scalars['String']['output'];
};

export type Estimate = {
  coverage?: Maybe<Array<Maybe<EstimateCoverage>>>;
  created?: Maybe<Scalars['String']['output']>;
  patientResponsibility?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalAllowedAmount?: Maybe<Scalars['Int']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  visit: Scalars['String']['output'];
};

export type EstimateBenefits = {
  coinsurance?: Maybe<Scalars['Float']['output']>;
  copayment?: Maybe<Scalars['Int']['output']>;
  coverageOrder?: Maybe<EstimateCoverageOrder>;
  deductibleRemaining?: Maybe<Scalars['Int']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  outOfPocketRemaining?: Maybe<Scalars['Int']['output']>;
};

export type EstimateBenefitsInput = {
  coinsurance?: InputMaybe<Scalars['Float']['input']>;
  copayment?: InputMaybe<Scalars['Int']['input']>;
  coverageOrder?: InputMaybe<EstimateCoverageOrder>;
  deductibleRemaining?: InputMaybe<Scalars['Int']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  outOfPocketRemaining?: InputMaybe<Scalars['Int']['input']>;
};

export type EstimateCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type EstimateCoverage = {
  benefits?: Maybe<EstimateBenefits>;
  coverageId: Scalars['String']['output'];
  fees?: Maybe<Array<Maybe<EstimateFees>>>;
  id?: Maybe<Scalars['String']['output']>;
  visit?: Maybe<Scalars['String']['output']>;
};

export type EstimateCoverageInput = {
  benefits?: InputMaybe<EstimateBenefitsInput>;
  coverageId: Scalars['String']['input'];
  fees?: InputMaybe<Array<InputMaybe<EstimateFeesInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export enum EstimateCoverageOrder {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

export type EstimateFees = {
  allowedAmount?: Maybe<Scalars['Int']['output']>;
  appointmentId: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  serviceType?: Maybe<EstimateFeesServiceType>;
};

export type EstimateFeesInput = {
  allowedAmount?: InputMaybe<Scalars['Int']['input']>;
  appointmentId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<EstimateFeesServiceTypeInput>;
};

export type EstimateFeesServiceType = {
  coding: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
};

export type EstimateFeesServiceTypeInput = {
  coding: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
};

export type EstimateInput = {
  coverage?: InputMaybe<Array<InputMaybe<EstimateCoverageInput>>>;
  created?: InputMaybe<Scalars['String']['input']>;
  patientResponsibility?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  totalAllowedAmount?: InputMaybe<Scalars['Int']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit: Scalars['String']['input'];
};

export type EstimateQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<Estimate>>;
};

export type EstimateQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Estimate;
};

export type FaxOutreach = {
  caller: Scalars['String']['output'];
  created?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  intent: FaxOutreachIntent;
  payload?: Maybe<FaxOutreachPayload>;
  practitioner: Scalars['String']['output'];
  status: FaxOutreachStatus;
  target: Scalars['String']['output'];
  template: Scalars['String']['output'];
  tenant: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
  userReadById?: Maybe<UserQueryReadResponse>;
  visit: Scalars['String']['output'];
};

export type FaxOutreachCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export enum FaxOutreachIntent {
  RequestForClinicals = 'RequestForClinicals',
  RequestForOrder = 'RequestForOrder',
  RequestToInitiate = 'RequestToInitiate'
}

export type FaxOutreachPayload = {
  patientFirstName?: Maybe<Scalars['String']['output']>;
  patientLastName?: Maybe<Scalars['String']['output']>;
};

export type FaxOutreachQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<FaxOutreach>>;
};

export type FaxOutreachQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: FaxOutreach;
};

export type FaxOutreachRequestInput = {
  intent: FaxOutreachIntent;
  practitioner?: InputMaybe<Scalars['String']['input']>;
  visit: Scalars['String']['input'];
};

export type FaxOutreachRule = {
  created?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  intent: FaxOutreachIntent;
  practitioner: Scalars['String']['output'];
  tenant: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
};

export enum FaxOutreachRuleIntent {
  RequestForClinicals = 'RequestForClinicals',
  RequestForOrder = 'RequestForOrder',
  RequestToInitiate = 'RequestToInitiate'
}

export type FaxOutreachRuleQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<FaxOutreachRule>>;
};

export type FaxOutreachRuleRequestInput = {
  intent: FaxOutreachRuleIntent;
  practitioner: Scalars['String']['input'];
};

export enum FaxOutreachStatus {
  failure = 'failure',
  pending = 'pending',
  success = 'success'
}

export type FeeSchedule = {
  created?: Maybe<Scalars['String']['output']>;
  fees?: Maybe<Array<Maybe<FeeScheduleFees>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type FeeScheduleCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type FeeScheduleFees = {
  amount: Scalars['Float']['output'];
  created?: Maybe<Scalars['String']['output']>;
  effectiveDate?: Maybe<Scalars['String']['output']>;
  feeScheduleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  serviceTypeCode: Scalars['String']['output'];
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type FeeScheduleFeesInput = {
  amount: Scalars['Float']['input'];
  created?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  feeScheduleId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  serviceTypeCode: Scalars['String']['input'];
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type FeeScheduleFeesQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<FeeScheduleFees>>;
};

export type FeeScheduleFeesQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: FeeScheduleFees;
};

export type FeeScheduleFeesWriteInput = {
  amount: Scalars['Float']['input'];
  created?: InputMaybe<Scalars['String']['input']>;
  effectiveDate?: InputMaybe<Scalars['String']['input']>;
  feeScheduleId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  serviceTypeCode: Scalars['String']['input'];
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type FeeScheduleQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<FeeSchedule>>;
};

export type FeeScheduleQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: FeeSchedule;
};

export type FeeScheduleWriteInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<Array<InputMaybe<FeeScheduleFeesInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type Flow = {
  appointmentId?: Maybe<Scalars['String']['output']>;
  appointmentStart?: Maybe<Scalars['String']['output']>;
  appointmentStatus?: Maybe<AppointmentStatus>;
  created?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  doNotContact?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['String']['output']>;
  patientId?: Maybe<Scalars['String']['output']>;
  priorAuthEnd?: Maybe<Scalars['String']['output']>;
  priorAuthStart?: Maybe<Scalars['String']['output']>;
  priorAuthStatus?: Maybe<Scalars['String']['output']>;
  serviceCategory?: Maybe<AppointmentServiceCategory>;
  serviceType?: Maybe<AppointmentServiceType>;
  tenant?: Maybe<Scalars['String']['output']>;
  visitId?: Maybe<Scalars['String']['output']>;
};

export type FlowCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type FlowQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<Flow>>;
};

export type FlowQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Flow;
};

export type FlowWriteInput = {
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  appointmentStart?: InputMaybe<Scalars['String']['input']>;
  appointmentStatus?: InputMaybe<AppointmentStatus>;
  created?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['String']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  priorAuthEnd?: InputMaybe<Scalars['String']['input']>;
  priorAuthStart?: InputMaybe<Scalars['String']['input']>;
  priorAuthStatus?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<AppointmentServiceCategoryInput>;
  serviceType?: InputMaybe<AppointmentServiceTypeInput>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  visitId?: InputMaybe<Scalars['String']['input']>;
};

export enum Intent {
  RequestForClinicals = 'RequestForClinicals',
  RequestForOrder = 'RequestForOrder',
  RequestToInitiate = 'RequestToInitiate'
}

export type Location = {
  address?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  managingOrganization?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  npi?: Maybe<Scalars['String']['output']>;
  partOf?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  taxId?: Maybe<Scalars['String']['output']>;
  telecom?: Maybe<Array<Maybe<LocationTelecom>>>;
  tenant?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type LocationCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type LocationPatchInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  managingOrganization?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  npi?: InputMaybe<Scalars['String']['input']>;
  partOf?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<LocationTelecomInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type LocationQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources?: Maybe<Array<Maybe<Location>>>;
};

export type LocationQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Location;
};

export type LocationTelecom = {
  rank?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type LocationTelecomInput = {
  rank?: InputMaybe<Scalars['Float']['input']>;
  system?: InputMaybe<Scalars['String']['input']>;
  use?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type LocationWriteInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  managingOrganization?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  npi?: InputMaybe<Scalars['String']['input']>;
  partOf?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<LocationTelecomInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type LookupAuthRequirement = {
  created?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  ediId?: Maybe<Scalars['String']['output']>;
  exclusions?: Maybe<Array<Maybe<LookupAuthRequirementExclusions>>>;
  groupNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isAuthRequired: Scalars['Boolean']['output'];
  organizationName?: Maybe<Scalars['String']['output']>;
  ruleType?: Maybe<LookupRuleType>;
  serviceType: LookupAuthRequirementServiceType;
  subscriberPrefix?: Maybe<Scalars['String']['output']>;
  susanOutput?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type LookupAuthRequirementCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type LookupAuthRequirementExclusions = {
  excludeEdiId?: Maybe<Scalars['String']['output']>;
  excludeGroupNumber?: Maybe<Scalars['String']['output']>;
  excludeOrganizationName?: Maybe<Scalars['String']['output']>;
  excludeServiceTypeCoding?: Maybe<Scalars['String']['output']>;
  excludeSubscriberPrefix?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
};

export type LookupAuthRequirementExclusionsInput = {
  excludeEdiId?: InputMaybe<Scalars['String']['input']>;
  excludeGroupNumber?: InputMaybe<Scalars['String']['input']>;
  excludeOrganizationName?: InputMaybe<Scalars['String']['input']>;
  excludeServiceTypeCoding?: InputMaybe<Scalars['String']['input']>;
  excludeSubscriberPrefix?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type LookupAuthRequirementServiceType = {
  coding: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type LookupAuthRequirementServiceTypeInput = {
  coding: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type LookupQueryListAuthRequirementResponse = {
  pages: Scalars['Int']['output'];
  resources?: Maybe<Array<Maybe<LookupAuthRequirement>>>;
};

export type LookupQueryReadAuthRequrimentResponse = {
  resource: LookupAuthRequirement;
};

export enum LookupRuleType {
  global = 'global',
  local = 'local'
}

export type LookupWriteInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  ediId?: InputMaybe<Scalars['String']['input']>;
  exclusions?: InputMaybe<Array<InputMaybe<LookupAuthRequirementExclusionsInput>>>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAuthRequired: Scalars['Boolean']['input'];
  organizationName?: InputMaybe<Scalars['String']['input']>;
  ruleType?: InputMaybe<LookupRuleType>;
  serviceType: LookupAuthRequirementServiceTypeInput;
  subscriberPrefix?: InputMaybe<Scalars['String']['input']>;
  susanOutput?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type LookupauthRequirementValidation = {
  description?: Maybe<Scalars['String']['output']>;
  isAuthRequired?: Maybe<Scalars['Boolean']['output']>;
};

export type LookupqueryAuthRequirementValidationResponse = {
  resource: LookupauthRequirementValidation;
};

export type ModmedAuthRequestInput = {
  apiKey: Scalars['String']['input'];
  password: Scalars['String']['input'];
  prefix: Scalars['String']['input'];
  stage: ModmedAuthRequestStage;
  tenant: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export enum ModmedAuthRequestStage {
  practice = 'practice',
  production = 'production',
  sandbox = 'sandbox'
}

export type ModmedAuthResponse = {
  scope: Scalars['String']['output'];
};

export type ModmedTokenRequestInput = {
  tenant: Scalars['String']['input'];
};

export type ModmedTokenResponse = {
  accessToken: Scalars['String']['output'];
  apiKey: Scalars['String']['output'];
  expiresIn?: Maybe<Scalars['Float']['output']>;
  prefix: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  stage: ModmedTokenResponseStage;
};

export enum ModmedTokenResponseStage {
  practice = 'practice',
  production = 'production',
  sandbox = 'sandbox'
}

export type Mutation = {
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/appointment/
   */
  appointmentCreate?: Maybe<AppointmentCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/appointment/{id}
   */
  appointmentDelete?: Maybe<AppointmentCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/appointment/{id}
   */
  appointmentPatch?: Maybe<AppointmentCommandResponse>;
  /**
   * Request appointment reschedule.
   *
   * Equivalent to PUT /{tenant}/appointment/{id}/reschedule
   */
  appointmentReschedule?: Maybe<AppointmentCommandResponse>;
  /**
   * Cancel appointment reschedule.
   *
   * Equivalent to POST /{tenant}/appointment/reschedule/{id}/cancel
   */
  appointmentRescheduleCancel?: Maybe<AppointmentCommandResponse>;
  /**
   * Confirm appointment reschedule.
   *
   * Equivalent to POST /{tenant}/appointment/reschedule/{id}/confirm
   */
  appointmentRescheduleConfirm?: Maybe<AppointmentCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/appointment/{id}
   */
  appointmentUpdate?: Maybe<AppointmentCommandResponse>;
  /**
   * Authenticate with ModMedical API.
   *
   * Equivalent to POST /oauth/modmed/authenticate
   */
  authenticateModmed?: Maybe<ModmedAuthResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /codeSystem/
   */
  codeSystemCreate?: Maybe<CodeSystemCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /codeSystem/{id}
   */
  codeSystemDelete?: Maybe<CodeSystemCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /codeSystem/{id}
   */
  codeSystemUpdate?: Maybe<CodeSystemCommandResponse>;
  /**
   * Create a new coding.
   *
   * Equivalent to POST /codeSystem/{id}/coding
   */
  codingCreate?: Maybe<CodeSystemCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /codeSystem/{id}/coding/{coding_id}
   */
  codingDelete?: Maybe<CodeSystemCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /codeSystem/{id}/coding/{coding_id}
   */
  codingUpdate?: Maybe<CodeSystemCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/coverage/
   */
  coverageCreate?: Maybe<CoverageCommandResponse>;
  /**
   * Eligibility and benefits verification.
   *
   * Equivalent to POST /{tenant}/coverage/ebv
   */
  coverageEbv?: Maybe<CoverageEbvResult>;
  /**
   * Initiate Coverage API for a given id
   *
   * Equivalent to POST /{tenant}/coverage/{id}/initiate
   */
  coverageInitiate?: Maybe<CoverageCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/coverage/{id}
   */
  coveragePatch?: Maybe<CoverageCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/coverage/{id}
   */
  coverageRemove?: Maybe<CoverageCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/coverage/{id}
   */
  coverageUpdate?: Maybe<CoverageCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/device/
   */
  deviceCreate?: Maybe<DeviceCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/device/{id}
   */
  devicePatch?: Maybe<DeviceCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/device/{id}
   */
  deviceRemove?: Maybe<DeviceCommandResponse>;
  /**
   * Create a new device service duration.
   *
   * Equivalent to POST /{tenant}/device/{id}/serviceDuration
   */
  deviceServiceDurationCreate?: Maybe<DeviceCommandResponse>;
  /**
   * Create a new or patch an existing device service duration by serviceTypeCode.
   *
   * Equivalent to PATCH /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationPatch?: Maybe<DeviceCommandResponse>;
  /**
   * Delete an device service duration by serviceTypeCode.
   *
   * Equivalent to DELETE /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationRemove?: Maybe<DeviceCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/device/{id}
   */
  deviceUpdate?: Maybe<DeviceCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/document/
   */
  documentCreate?: Maybe<DocumentCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/document/{id}
   */
  documentDelete?: Maybe<DocumentCommandResponse>;
  /**
   * Extract the data by ID.
   *
   * Equivalent to POST /{tenant}/document/{id}/extract
   */
  documentExtractDataFromDocument?: Maybe<Scalars['JSON']['output']>;
  /**
   * Send Fax using document id
   *
   * Equivalent to POST /{tenant}/document/{id}/sendFax
   */
  documentFaxSend?: Maybe<DocumentFaxResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PATCH /{tenant}/document/{id}
   */
  documentUpdate?: Maybe<DocumentCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/estimate/
   */
  estimateCreate?: Maybe<EstimateCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/estimate/{id}
   */
  estimateDelete?: Maybe<EstimateCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/estimate/{id}
   */
  estimateUpdate?: Maybe<EstimateCommandResponse>;
  /**
   * Create a new fax outreach.
   *
   * Equivalent to POST /{tenant}/faxOutreach/
   */
  faxOutreachCreate?: Maybe<FaxOutreachCommandResponse>;
  /**
   * Create a new fax outreach rule.
   *
   * Equivalent to POST /{tenant}/faxOutreach/rule
   */
  faxOutreachRuleCreate?: Maybe<FaxOutreachCommandResponse>;
  /**
   * Remove a fax outreach rule.
   *
   * Equivalent to DELETE /{tenant}/faxOutreach/rule/{id}
   */
  faxOutreachRuleRemove?: Maybe<FaxOutreachCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/feeSchedule/
   */
  feeScheduleCreate?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/feeSchedule/{id}
   */
  feeScheduleDelete?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/feeSchedule/{id}/fees
   */
  feeScheduleFeesCreate?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesDelete?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Create a new or update an existing Fees entity.
   *
   * Equivalent to PUT /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesUpdate?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/feeSchedule/{id}
   */
  feeScheduleUpdate?: Maybe<FeeScheduleCommandResponse>;
  /**
   * Provide an access token for AthenaHealth API.
   *
   * Equivalent to POST /oauth/athena/token
   */
  fetchAthenaToken?: Maybe<AthenaTokenResponse>;
  /**
   * Provide an access token for Epic API.
   *
   * Equivalent to POST /oauth/epic/token
   */
  fetchEpicToken?: Maybe<EpicTokenResponse>;
  /**
   * Provide an access token for ModMed API.
   *
   * Equivalent to POST /oauth/modmed/token
   */
  fetchModmedToken?: Maybe<ModmedTokenResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/flow/
   */
  flowCreate?: Maybe<FlowCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/flow/{id}
   */
  flowDelete?: Maybe<FlowCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/flow/{id}
   */
  flowUpdate?: Maybe<FlowCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/location/
   */
  locationCreate?: Maybe<LocationCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/location/{id}
   */
  locationPatch?: Maybe<LocationCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/location/{id}
   */
  locationRemove?: Maybe<LocationCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/location/{id}
   */
  locationUpdate?: Maybe<LocationCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/lookup/authRequirement
   */
  lookupCreate?: Maybe<LookupAuthRequirementCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/lookup/authRequirement/{id}
   */
  lookupDelete?: Maybe<LookupAuthRequirementCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/lookup/authRequirement/{id}
   */
  lookupUpdate?: Maybe<LookupAuthRequirementCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/order/
   */
  orderCreate?: Maybe<OrderCommandResponse>;
  /**
   * Ingest resource
   *
   * Equivalent to POST /{tenant}/order/ingest
   */
  orderIngest?: Maybe<OrderIngestResponse>;
  /**
   * Create a new contract.
   *
   * Equivalent to POST /{tenant}/organization/{id}/contract
   */
  organizationContractCreate?: Maybe<OrganizationCommandResponse>;
  /**
   * Create Or Patch contract.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractPatch?: Maybe<OrganizationCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractRemove?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/organization/
   */
  organizationCreate?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new fee schedule.
   *
   * Equivalent to POST /{tenant}/organization/{id}/feeSchedule
   */
  organizationFeeScheduleCreate?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeSchedulePatch?: Maybe<OrganizationCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleRemove?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleUpdatedUpdate?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/organization/{id}
   */
  organizationPatch?: Maybe<OrganizationCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/organization/{id}
   */
  organizationRemove?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/organization/{id}
   */
  organizationUpdate?: Maybe<OrganizationCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/patient/
   */
  patientCreate?: Maybe<PatientCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/patient/{id}
   */
  patientPatch?: Maybe<PatientCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/patient/{id}
   */
  patientRemove?: Maybe<PatientCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/patient/{id}
   */
  patientUpdate?: Maybe<PatientCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/practitioner/
   */
  practitionerCreate?: Maybe<PractitionerCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/practitioner/{id}
   */
  practitionerPatch?: Maybe<PractitionerCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/practitioner/{id}
   */
  practitionerRemove?: Maybe<PractitionerCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/practitioner/{id}
   */
  practitionerUpdate?: Maybe<PractitionerCommandResponse>;
  /**
   * update a prior auth to get auth Requirement
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/authRequirement
   */
  priorAuthAuthRequirementInitiate?: Maybe<PriorAuthCommandResponse>;
  /**
   * Initiate a prior auth to get auth status
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/coverage/{coverage}/authStatus
   */
  priorAuthAuthStatusInitiate?: Maybe<PriorAuthCommandResponse>;
  /**
   * Patch a coverage.
   *
   * Equivalent to PATCH /{tenant}/priorAuth/{id}/coverage/{coverage}
   */
  priorAuthCoveragePatch?: Maybe<PriorAuthCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/priorAuth/
   */
  priorAuthCreate?: Maybe<PriorAuthCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/priorAuth/{id}
   */
  priorAuthDelete?: Maybe<PriorAuthCommandResponse>;
  /**
   * Indicate that the prior auth information was added.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/information-added
   */
  priorAuthInformationAdded?: Maybe<PriorAuthCommandResponse>;
  /**
   * Initiate a prior auth.
   *
   * Equivalent to POST /{tenant}/priorAuth/{id}/initiate
   */
  priorAuthInitiate?: Maybe<PriorAuthCommandResponse>;
  /**
   * Create a new or patch an existing entity.
   *
   * Equivalent to PATCH /{tenant}/priorAuth/{id}
   */
  priorAuthPatch?: Maybe<PriorAuthCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/schedule/
   */
  scheduleCreate?: Maybe<ScheduleCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/schedule/{id}
   */
  scheduleDelete?: Maybe<ScheduleCommandResponse>;
  /**
   * Create a new slots entity.
   *
   * Equivalent to POST /{tenant}/schedule/slots
   */
  scheduleSlotsCreate?: Maybe<ScheduleCommandResponse>;
  /**
   * Creates a new or updates existing slots entity.
   *
   * Equivalent to PUT /{tenant}/schedule/slots/{id}
   */
  scheduleSlotsUpdate?: Maybe<ScheduleCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/schedule/{id}
   */
  scheduleUpdate?: Maybe<ScheduleCommandResponse>;
  /**
   * Create a new entity.
   *
   * Equivalent to POST /{tenant}/sync/
   */
  syncCreate?: Maybe<SyncCommandResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/sync/{id}
   */
  syncDelete?: Maybe<SyncCommandResponse>;
  /**
   * Create or Patch entity.
   *
   * Equivalent to PATCH /{tenant}/sync/{id}
   */
  syncPatch?: Maybe<SyncCommandResponse>;
  /**
   * Create a new or update an existing entity.
   *
   * Equivalent to PUT /{tenant}/sync/{id}
   */
  syncUpdate?: Maybe<SyncCommandResponse>;
  /**
   * Send Nudge Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/nudge
   */
  textOutreachNudge?: Maybe<TextOutreachCommandResponse>;
  /**
   * Send Reschedule Failed Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/rescheduleFailed
   */
  textOutreachRescheduleFailed?: Maybe<TextOutreachCommandResponse>;
  /**
   * Send Reschedule Success Outreach
   *
   * Equivalent to POST /{tenant}/textOutreach/rescheduleSuccess
   */
  textOutreachRescheduleSuccess?: Maybe<TextOutreachCommandResponse>;
  /**
   * Create a new nudge URL.
   *
   * Equivalent to POST /url/nudge
   */
  urlNudgeCreate?: Maybe<UrlNudgeCommandResponse>;
  /**
   * Delete a nudge URL.
   *
   * Equivalent to DELETE /url/nudge/{id}
   */
  urlNudgeDelete?: Maybe<UrlNudgeCommandResponse>;
  /**
   * Create a new or Patch an existing nudge URL.
   *
   * Equivalent to PATCH /url/nudge/{id}
   */
  urlNudgePatch?: Maybe<UrlNudgeCommandResponse>;
  /**
   * Create a new or update an existing nudge URL.
   *
   * Equivalent to PUT /url/nudge/{id}
   */
  urlNudgeUpdate?: Maybe<UrlNudgeCommandResponse>;
  /**
   * Create a new user.
   *
   * Equivalent to POST /{tenant}/user/
   */
  userCreate?: Maybe<UserCommandResponse>;
  /**
   * Create temporary AWS credentials.
   *
   * Equivalent to POST /{tenant}/user/credentials
   */
  userCreateCredentials?: Maybe<UserCreateCredentialsResponse>;
  /**
   * Delete an entity.
   *
   * Equivalent to DELETE /{tenant}/user/{username}
   */
  userDelete?: Maybe<UserCommandResponse>;
  /**
   * Update an existing user.
   *
   * Equivalent to PUT /{tenant}/user/{username}
   */
  userUpdate?: Maybe<UserCommandResponse>;
};


export type MutationappointmentCreateArgs = {
  requestBody: AppointmentWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationappointmentDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationappointmentPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: AppointmentPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationappointmentRescheduleArgs = {
  id: Scalars['String']['input'];
  requestBody: AppointmentRescheduleRequestInput;
  tenant: Scalars['String']['input'];
};


export type MutationappointmentRescheduleCancelArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationappointmentRescheduleConfirmArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationappointmentUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: AppointmentWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationauthenticateModmedArgs = {
  requestBody: ModmedAuthRequestInput;
};


export type MutationcodeSystemCreateArgs = {
  requestBody: CodeSystemInput;
};


export type MutationcodeSystemDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationcodeSystemUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: CodeSystemInput;
};


export type MutationcodingCreateArgs = {
  id: Scalars['String']['input'];
  requestBody: CodeSystemCodingInput;
};


export type MutationcodingDeleteArgs = {
  codingId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationcodingUpdateArgs = {
  codingId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: CodeSystemCodingInput;
};


export type MutationcoverageCreateArgs = {
  requestBody: CoveragePutInput;
  tenant: Scalars['String']['input'];
};


export type MutationcoverageEbvArgs = {
  requestBody: CoverageEbvInputInput;
  tenant: Scalars['String']['input'];
};


export type MutationcoverageInitiateArgs = {
  id: Scalars['String']['input'];
  requestBody: CoverageInitiateInput;
  tenant: Scalars['String']['input'];
};


export type MutationcoveragePatchArgs = {
  id: Scalars['String']['input'];
  requestBody: CoveragePatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationcoverageRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationcoverageUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: CoveragePutInput;
  tenant: Scalars['String']['input'];
};


export type MutationdeviceCreateArgs = {
  requestBody: DeviceWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationdevicePatchArgs = {
  id: Scalars['String']['input'];
  requestBody: DevicePatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationdeviceRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationdeviceServiceDurationCreateArgs = {
  id: Scalars['String']['input'];
  requestBody: DeviceServiceDurationCreateInput;
  tenant: Scalars['String']['input'];
};


export type MutationdeviceServiceDurationPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: DeviceServiceDurationPatchInput;
  serviceTypeCode: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationdeviceServiceDurationRemoveArgs = {
  id: Scalars['String']['input'];
  serviceTypeCode: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationdeviceUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: DeviceWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationdocumentCreateArgs = {
  requestBody: DocumentCreateInput;
  tenant: Scalars['String']['input'];
};


export type MutationdocumentDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationdocumentExtractDataFromDocumentArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationdocumentFaxSendArgs = {
  id: Scalars['String']['input'];
  requestBody: DocumentFaxInput;
  tenant: Scalars['String']['input'];
};


export type MutationdocumentUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: DocumentPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationestimateCreateArgs = {
  requestBody: EstimateInput;
  tenant: Scalars['String']['input'];
};


export type MutationestimateDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationestimateUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: EstimateInput;
  tenant: Scalars['String']['input'];
};


export type MutationfaxOutreachCreateArgs = {
  requestBody: FaxOutreachRequestInput;
  tenant: Scalars['String']['input'];
};


export type MutationfaxOutreachRuleCreateArgs = {
  requestBody: FaxOutreachRuleRequestInput;
  tenant: Scalars['String']['input'];
};


export type MutationfaxOutreachRuleRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleCreateArgs = {
  requestBody: FeeScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleFeesCreateArgs = {
  id: Scalars['String']['input'];
  requestBody: FeeScheduleFeesWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleFeesDeleteArgs = {
  feeId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleFeesUpdateArgs = {
  feeId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: FeeScheduleFeesWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationfeeScheduleUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: FeeScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationfetchAthenaTokenArgs = {
  requestBody: AthenaTokenRequestInput;
};


export type MutationfetchModmedTokenArgs = {
  requestBody: ModmedTokenRequestInput;
};


export type MutationflowCreateArgs = {
  requestBody: FlowWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationflowDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationflowUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: FlowWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationlocationCreateArgs = {
  requestBody: LocationWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationlocationPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: LocationPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationlocationRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationlocationUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: LocationWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationlookupCreateArgs = {
  requestBody: LookupWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationlookupDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationlookupUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: LookupWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorderCreateArgs = {
  requestBody: OrderWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorderIngestArgs = {
  requestBody: OrderIngestInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationContractCreateArgs = {
  id: Scalars['String']['input'];
  requestBody: OrganizationContractWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationContractPatchArgs = {
  contractId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: OrganizationContractPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationContractRemoveArgs = {
  contractId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationorganizationCreateArgs = {
  requestBody: OrganizationWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationFeeScheduleCreateArgs = {
  id: Scalars['String']['input'];
  requestBody: OrganizationFeeScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationFeeSchedulePatchArgs = {
  feeSchedule: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: OrganizationFeeSchedulePatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationFeeScheduleRemoveArgs = {
  feeSchedule: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationorganizationFeeScheduleUpdatedUpdateArgs = {
  feeSchedule: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: OrganizationFeeScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: OrganizationPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationorganizationRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationorganizationUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: OrganizationWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpatientCreateArgs = {
  requestBody: PatientWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpatientPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: PatientPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationpatientRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationpatientUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: PatientWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpractitionerCreateArgs = {
  requestBody: PractitionerWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpractitionerPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: PractitionerPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationpractitionerRemoveArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationpractitionerUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: PractitionerWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthAuthRequirementInitiateArgs = {
  coverage: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthAuthStatusInitiateArgs = {
  coverage: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: PriorAuthAuthstatusInitiateInput;
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthCoveragePatchArgs = {
  coverage: Scalars['String']['input'];
  id: Scalars['String']['input'];
  requestBody: PriorAuthCoveragePatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthCreateArgs = {
  requestBody: PriorAuthWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthInformationAddedArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthInitiateArgs = {
  id: Scalars['String']['input'];
  requestBody: PriorAuthInitiateInput;
  tenant: Scalars['String']['input'];
};


export type MutationpriorAuthPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: PriorAuthPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationscheduleCreateArgs = {
  requestBody: ScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationscheduleDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationscheduleSlotsCreateArgs = {
  requestBody: ScheduleSlotsInput;
  tenant: Scalars['String']['input'];
};


export type MutationscheduleSlotsUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: ScheduleSlotsInput;
  tenant: Scalars['String']['input'];
};


export type MutationscheduleUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: ScheduleWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationsyncCreateArgs = {
  requestBody: SyncWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationsyncDeleteArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type MutationsyncPatchArgs = {
  id: Scalars['String']['input'];
  requestBody: SyncPatchInput;
  tenant: Scalars['String']['input'];
};


export type MutationsyncUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: SyncWriteInput;
  tenant: Scalars['String']['input'];
};


export type MutationtextOutreachNudgeArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars['String']['input'];
};


export type MutationtextOutreachRescheduleFailedArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars['String']['input'];
};


export type MutationtextOutreachRescheduleSuccessArgs = {
  requestBody: TextOutreachCommandInput;
  tenant: Scalars['String']['input'];
};


export type MutationurlNudgeCreateArgs = {
  requestBody: UrlNudgeInput;
};


export type MutationurlNudgeDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationurlNudgePatchArgs = {
  id: Scalars['String']['input'];
  requestBody: UrlNudgeInput;
};


export type MutationurlNudgeUpdateArgs = {
  id: Scalars['String']['input'];
  requestBody: UrlNudgeInput;
};


export type MutationuserCreateArgs = {
  requestBody: UserCreateInput;
  tenant: Scalars['String']['input'];
};


export type MutationuserCreateCredentialsArgs = {
  requestBody: UserCreateCredentialsInput;
  tenant: Scalars['String']['input'];
};


export type MutationuserDeleteArgs = {
  tenant: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationuserUpdateArgs = {
  requestBody: UserUpdateInput;
  tenant: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Order = {
  appointment?: Maybe<Scalars['String']['output']>;
  callbackUrl?: Maybe<Scalars['String']['output']>;
  coverage?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  created: Scalars['String']['output'];
  documentId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  patient?: Maybe<Scalars['String']['output']>;
  practitioner?: Maybe<Scalars['String']['output']>;
  priorAuth: Scalars['String']['output'];
  runCoverage?: Maybe<Scalars['Boolean']['output']>;
  runPriorAuthCheck?: Maybe<Scalars['Boolean']['output']>;
  runPriorAuthConfirmation?: Maybe<Scalars['Boolean']['output']>;
  runPriorAuthSubmission?: Maybe<Scalars['Boolean']['output']>;
  tenant: Scalars['String']['output'];
  updated: Scalars['String']['output'];
  visit?: Maybe<Scalars['String']['output']>;
};

export enum Order2 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order3 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order4 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order5 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order6 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order7 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order8 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order9 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order10 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order11 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order12 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order13 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order14 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order15 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order16 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order17 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order18 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order19 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order20 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order21 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order22 {
  asc = 'asc',
  desc = 'desc'
}

export enum Order23 {
  asc = 'asc',
  desc = 'desc'
}

export enum OrderBy {
  created = 'created',
  startTime = 'startTime',
  updated = 'updated'
}

export enum OrderBy2 {
  created = 'created',
  startTime = 'startTime'
}

export enum OrderBy3 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy4 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy5 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy6 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy7 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy8 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy9 {
  created = 'created'
}

export enum OrderBy10 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy11 {
  created = 'created',
  modified = 'modified'
}

export enum OrderBy12 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy13 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy14 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy15 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy16 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy17 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy18 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy19 {
  appointmentStart = 'appointmentStart',
  appointmentStatus = 'appointmentStatus',
  authStatus = 'authStatus',
  created = 'created',
  updated = 'updated'
}

export enum OrderBy20 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy21 {
  created = 'created',
  updated = 'updated'
}

export enum OrderBy22 {
  Created = 'Created',
  Updated = 'Updated'
}

export type OrderCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type OrderIngestInput = {
  file: Scalars['String']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  tenant?: InputMaybe<Scalars['String']['input']>;
};

export type OrderIngestResponse = {
  id: Scalars['String']['output'];
  resources: Array<Maybe<OrderIngestResponseResource>>;
};

export type OrderIngestResponseResource = {
  appointmentId?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  rowNumber?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<OrderIngestResponseRowStatus>;
};

export enum OrderIngestResponseRowStatus {
  failed = 'failed',
  succeeded = 'succeeded',
  warning = 'warning'
}

export type OrderInputAppointmentInput = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  patient: Scalars['String']['input'];
  reasonCode?: InputMaybe<AppointmentReasonCodeInput>;
  serviceType: AppointmentServiceTypeInput;
  startTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrderInputAppointmentStatus>;
  visit: Scalars['String']['input'];
};

export enum OrderInputAppointmentStatus {
  arrived = 'arrived',
  booked = 'booked',
  bookingPending = 'bookingPending',
  canceled = 'canceled',
  checked_in = 'checked_in',
  completed = 'completed',
  pending = 'pending'
}

export type OrderInputCoverageInput = {
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  payorId?: InputMaybe<Scalars['String']['input']>;
  payorName?: InputMaybe<Scalars['String']['input']>;
  subscriberId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderInputLocationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrderInputPatientInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
};

export type OrderInputPractitionerInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  npi?: InputMaybe<Scalars['String']['input']>;
};

export type OrderQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources?: Maybe<Array<Maybe<Order>>>;
};

export type OrderQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Order;
};

export type OrderWriteInput = {
  appointment?: InputMaybe<OrderInputAppointmentInput>;
  callbackUrl?: InputMaybe<Scalars['String']['input']>;
  coverage?: InputMaybe<Array<InputMaybe<OrderInputCoverageInput>>>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<OrderInputLocationInput>;
  patient?: InputMaybe<OrderInputPatientInput>;
  practitioner?: InputMaybe<OrderInputPractitionerInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  runCoverage?: InputMaybe<Scalars['Boolean']['input']>;
  runPriorAuthCheck?: InputMaybe<Scalars['Boolean']['input']>;
  runPriorAuthConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
  runPriorAuthSubmission?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  active?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<OrganizationContact>;
  contract?: Maybe<Array<Maybe<OrganizationContract>>>;
  id: Scalars['String']['output'];
  identifiers?: Maybe<Array<Maybe<OrganizationIdentifier>>>;
  inNetwork?: Maybe<Scalars['Boolean']['output']>;
  isGravityAuthSupported?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  partOf?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  telecom?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type OrganizationCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type OrganizationContact = {
  name?: Maybe<Scalars['String']['output']>;
  telecom?: Maybe<Scalars['String']['output']>;
};

export type OrganizationContactInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationContract = {
  created?: Maybe<Scalars['String']['output']>;
  feeSchedule: Scalars['String']['output'];
  feeScheduleRead?: Maybe<FeeScheduleQueryReadResponse>;
  id?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  locationRead?: Maybe<LocationQueryReadResponse>;
  multiplier: Scalars['Float']['output'];
  organization?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type OrganizationContractInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  feeSchedule: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  multiplier: Scalars['Float']['input'];
  organization?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationContractPatchInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  feeSchedule?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  multiplier?: InputMaybe<Scalars['Float']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationContractQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<OrganizationContract>>;
};

export type OrganizationContractQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: OrganizationContract;
};

export type OrganizationContractWriteInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  feeSchedule?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  multiplier?: InputMaybe<Scalars['Float']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationFeeSchedule = {
  amount: Scalars['String']['output'];
  created?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  locationName?: Maybe<Scalars['String']['output']>;
  organization: Scalars['String']['output'];
  serviceType: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
};

export type OrganizationFeeSchedulePatchInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationFeeScheduleQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<OrganizationFeeSchedule>>;
};

export type OrganizationFeeScheduleWriteInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationIdentifier = {
  assigner?: Maybe<Scalars['String']['output']>;
  period?: Maybe<OrganizationIdentifierPeriod>;
  system: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type OrganizationIdentifierInput = {
  assigner?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<OrganizationIdentifierPeriodInput>;
  system: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  use?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type OrganizationIdentifierPeriod = {
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};

export type OrganizationIdentifierPeriodInput = {
  end?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationPatchInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<OrganizationContactInput>;
  contract?: InputMaybe<Array<InputMaybe<OrganizationContractInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<Array<InputMaybe<OrganizationIdentifierInput>>>;
  inNetwork?: InputMaybe<Scalars['Boolean']['input']>;
  isGravityAuthSupported?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partOf?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type OrganizationQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources?: Maybe<Array<Maybe<Organization>>>;
};

export type OrganizationQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Organization;
};

export type OrganizationWriteInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<OrganizationContactInput>;
  contract?: InputMaybe<Array<InputMaybe<OrganizationContractInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifiers?: InputMaybe<Array<InputMaybe<OrganizationIdentifierInput>>>;
  inNetwork?: InputMaybe<Scalars['Boolean']['input']>;
  isGravityAuthSupported?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  partOf?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type Patient = {
  address?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['String']['output']>;
  coverageList?: Maybe<CoverageQueryListResponse>;
  doNotContact?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  generatedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  middleName?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  telecom?: Maybe<Array<Maybe<PatientTelecom>>>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};


export type PatientcoverageListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type PatientCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type PatientPatchInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  generatedAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type PatientQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources?: Maybe<Array<Maybe<Patient>>>;
};

export type PatientQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Patient;
};

export type PatientTelecom = {
  rank?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PatientTelecomInput = {
  rank?: InputMaybe<Scalars['Float']['input']>;
  system?: InputMaybe<Scalars['String']['input']>;
  use?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PatientWriteInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  generatedAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<PatientTelecomInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export enum Permission {
  analyze = 'analyze',
  command = 'command',
  delete = 'delete',
  manage = 'manage',
  operate = 'operate',
  read = 'read',
  write = 'write'
}

export type Practitioner = {
  address?: Maybe<Scalars['String']['output']>;
  doNotContact?: Maybe<Scalars['Boolean']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPriorAuthSubmissionEnabled?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  metadata?: Maybe<PractitionerMetadata>;
  npi?: Maybe<Scalars['String']['output']>;
  speciality?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  telecom?: Maybe<Array<Maybe<PractitionerTelecom>>>;
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type PractitionerCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type PractitionerMetadata = {
  id?: Maybe<Scalars['String']['output']>;
  nudgeable?: Maybe<Scalars['Boolean']['output']>;
};

export type PractitionerMetadataInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  nudgeable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PractitionerPatchInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PractitionerMetadataInput>;
  npi?: InputMaybe<Scalars['String']['input']>;
  speciality?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<PractitionerTelecomInput>>>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type PractitionerQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources?: Maybe<Array<Maybe<Practitioner>>>;
};

export type PractitionerQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Practitioner;
};

export type PractitionerTelecom = {
  rank?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PractitionerTelecomInput = {
  rank?: InputMaybe<Scalars['Float']['input']>;
  system?: InputMaybe<Scalars['String']['input']>;
  use?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PractitionerWriteInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  metadata?: InputMaybe<PractitionerMetadataInput>;
  npi?: InputMaybe<Scalars['String']['input']>;
  speciality?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Array<InputMaybe<PractitionerTelecomInput>>>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export type PriorAuth = {
  appointmentId?: Maybe<Scalars['String']['output']>;
  appointmentRead?: Maybe<AppointmentQueryReadResponse>;
  appointmentStart?: Maybe<Scalars['String']['output']>;
  appointmentStatus?: Maybe<PriorAuthAppointmentStatus>;
  authStatus?: Maybe<PriorAuthAuthStatus>;
  coverage?: Maybe<Array<Maybe<PriorAuthCoverage>>>;
  device?: Maybe<Scalars['String']['output']>;
  documentList?: Maybe<DocumentQueryListResponse>;
  forceInitiate?: Maybe<Scalars['Boolean']['output']>;
  generated?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isPriorAuthSubmissionEnabled?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<PriorAuthMetadata>;
  mockScenarioId?: Maybe<Scalars['String']['output']>;
  patientId?: Maybe<Scalars['String']['output']>;
  patientRead?: Maybe<PatientQueryReadResponse>;
  practitioner?: Maybe<PriorAuthPractitioner>;
  practitionerRead?: Maybe<PractitionerQueryReadResponse>;
  serviceCategory?: Maybe<PriorAuthServiceCategory>;
  serviceType?: Maybe<PriorAuthServiceType>;
  tag?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  visit?: Maybe<Scalars['String']['output']>;
};

export enum PriorAuthAppointmentStatus {
  arrived = 'arrived',
  booked = 'booked',
  bookingPending = 'bookingPending',
  canceled = 'canceled',
  checked_in = 'checked_in',
  completed = 'completed',
  pending = 'pending'
}

export enum PriorAuthAuthStatus {
  action_required = 'action_required',
  complete = 'complete',
  failed = 'failed',
  pending = 'pending',
  running = 'running'
}

export enum PriorAuthAuthstatusInitiateBotName {
  AIM = 'AIM',
  Availity = 'Availity',
  Carecore = 'Carecore',
  Medsolutions = 'Medsolutions',
  NIA = 'NIA'
}

export type PriorAuthAuthstatusInitiateInput = {
  botName?: InputMaybe<Array<InputMaybe<PriorAuthAuthstatusInitiateBotName>>>;
};

export type PriorAuthCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type PriorAuthCoverage = {
  actionRequired?: Maybe<Scalars['Boolean']['output']>;
  actionRequiredType?: Maybe<PriorAuthCoverageActionRequiredType>;
  authError?: Maybe<PriorAuthCoverageAuthError>;
  authErrorCause?: Maybe<Scalars['String']['output']>;
  authNumber?: Maybe<Scalars['String']['output']>;
  authRequirement?: Maybe<PriorAuthCoverageActionRequirement>;
  authResult?: Maybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: Maybe<Scalars['String']['output']>;
  botName?: Maybe<Scalars['String']['output']>;
  caseReferenceNumber?: Maybe<Scalars['String']['output']>;
  clinicalsAvailable?: Maybe<Scalars['Boolean']['output']>;
  completed?: Maybe<Scalars['String']['output']>;
  coverageId: Scalars['String']['output'];
  coverageRead?: Maybe<CoverageQueryReadResponse>;
  coverageStatus?: Maybe<PriorAuthCoverageStatus>;
  created?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  execution?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  initiated?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  priorAuthCoverageLinkId?: Maybe<Scalars['String']['output']>;
  retrievedByGravity?: Maybe<Scalars['Boolean']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  submitted?: Maybe<Scalars['String']['output']>;
  submittedBy?: Maybe<Scalars['String']['output']>;
  submittedByGravity?: Maybe<Scalars['Boolean']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export enum PriorAuthCoverageActionRequiredType {
  ClinicalsRequired = 'ClinicalsRequired',
  ConfirmAuthRequirement = 'ConfirmAuthRequirement',
  IncorrectOrMissingInfo = 'IncorrectOrMissingInfo'
}

export enum PriorAuthCoverageActionRequirement {
  ConfirmAuthRequirement = 'ConfirmAuthRequirement',
  Fetching = 'Fetching',
  NotRequired = 'NotRequired',
  Required = 'Required',
  Unknown = 'Unknown'
}

export enum PriorAuthCoverageAuthError {
  ClinicalsRequired = 'ClinicalsRequired',
  ConfirmAuthRequirement = 'ConfirmAuthRequirement',
  LoginError = 'LoginError',
  MissingInformationError = 'MissingInformationError',
  NetworkError = 'NetworkError',
  UnknownError = 'UnknownError',
  WorkflowTerminated = 'WorkflowTerminated'
}

export enum PriorAuthCoverageAuthResult {
  CaseAuthorized = 'CaseAuthorized',
  CaseDenied = 'CaseDenied',
  CaseNotStarted = 'CaseNotStarted',
  CaseNotSupported = 'CaseNotSupported',
  CaseP2P = 'CaseP2P',
  CasePending = 'CasePending',
  CoverageNoAuthRequired = 'CoverageNoAuthRequired',
  PatientNotFound = 'PatientNotFound'
}

export type PriorAuthCoverageInput = {
  actionRequired?: InputMaybe<Scalars['Boolean']['input']>;
  actionRequiredType?: InputMaybe<PriorAuthCoverageActionRequiredType>;
  authError?: InputMaybe<PriorAuthCoverageAuthError>;
  authErrorCause?: InputMaybe<Scalars['String']['input']>;
  authNumber?: InputMaybe<Scalars['String']['input']>;
  authRequirement?: InputMaybe<PriorAuthCoverageActionRequirement>;
  authResult?: InputMaybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: InputMaybe<Scalars['String']['input']>;
  botName?: InputMaybe<Scalars['String']['input']>;
  caseReferenceNumber?: InputMaybe<Scalars['String']['input']>;
  clinicalsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['String']['input']>;
  coverageId: Scalars['String']['input'];
  coverageStatus?: InputMaybe<PriorAuthCoverageStatus>;
  created?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  execution?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  initiated?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  priorAuthCoverageLinkId?: InputMaybe<Scalars['String']['input']>;
  retrievedByGravity?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  submitted?: InputMaybe<Scalars['String']['input']>;
  submittedBy?: InputMaybe<Scalars['String']['input']>;
  submittedByGravity?: InputMaybe<Scalars['Boolean']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type PriorAuthCoveragePatchInput = {
  authError?: InputMaybe<PriorAuthCoverageAuthError>;
  authErrorCause?: InputMaybe<Scalars['String']['input']>;
  authNumber?: InputMaybe<Scalars['String']['input']>;
  authRequirement?: InputMaybe<PriorAuthCoverageActionRequirement>;
  authResult?: InputMaybe<PriorAuthCoverageAuthResult>;
  authRuleDescription?: InputMaybe<Scalars['String']['input']>;
  botName?: InputMaybe<Scalars['String']['input']>;
  caseReferenceNumber?: InputMaybe<Scalars['String']['input']>;
  clinicalsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  coverageStatus?: InputMaybe<PriorAuthCoverageStatus>;
  created?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  initiated?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  retrievedByGravity?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  submitted?: InputMaybe<Scalars['String']['input']>;
  submittedBy?: InputMaybe<Scalars['String']['input']>;
  submittedByGravity?: InputMaybe<Scalars['Boolean']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type PriorAuthCoverageQueryReadResponse = {
  resource: PriorAuthCoverage;
};

export enum PriorAuthCoverageStatus {
  ActiveCoverage = 'ActiveCoverage',
  Error = 'Error',
  InTransition = 'InTransition',
  Initiated = 'Initiated',
  NoCoverage = 'NoCoverage',
  PayorNotActivated = 'PayorNotActivated',
  Pending = 'Pending'
}

export type PriorAuthHistory = {
  coverage?: Maybe<Scalars['String']['output']>;
  event: PriorAuthHistoryEvent;
  id: Scalars['String']['output'];
  parent: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

export enum PriorAuthHistoryEvent {
  CaseAuthorized = 'CaseAuthorized',
  CaseDenied = 'CaseDenied',
  CaseNotStarted = 'CaseNotStarted',
  CaseNotSupported = 'CaseNotSupported',
  CaseP2P = 'CaseP2P',
  CasePending = 'CasePending',
  ClinicalsRequired = 'ClinicalsRequired',
  ConfirmAuthRequirement = 'ConfirmAuthRequirement',
  CoverageActive = 'CoverageActive',
  CoverageAuthRequired = 'CoverageAuthRequired',
  CoverageAuthRequirementUnknown = 'CoverageAuthRequirementUnknown',
  CoverageError = 'CoverageError',
  CoverageInitiated = 'CoverageInitiated',
  CoverageNoAuthRequired = 'CoverageNoAuthRequired',
  CoverageNotActive = 'CoverageNotActive',
  CoverageNotSupported = 'CoverageNotSupported',
  InputUpdated = 'InputUpdated',
  LoginError = 'LoginError',
  MissingInformationError = 'MissingInformationError',
  NetworkError = 'NetworkError',
  PatientNotFound = 'PatientNotFound',
  PriorAuthHistoryDaysOut = 'PriorAuthHistoryDaysOut',
  PriorAuthInitiated = 'PriorAuthInitiated',
  PriorAuthQueued = 'PriorAuthQueued',
  SyncAcknowledged = 'SyncAcknowledged',
  SyncFailed = 'SyncFailed',
  UnknownError = 'UnknownError',
  WorkflowTerminated = 'WorkflowTerminated'
}

export type PriorAuthHistoryQueryListResponse = {
  resources: Array<Maybe<PriorAuthHistory>>;
};

export type PriorAuthHistoryQueryMetricResponse = {
  resource?: Maybe<Scalars['JSON']['output']>;
  resources?: Maybe<Array<Maybe<PriorAuthMetrics>>>;
};

export type PriorAuthInitiateInput = {
  forceInitiate?: InputMaybe<Scalars['Boolean']['input']>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriorAuthMetadata = {
  gravityAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  toReview?: Maybe<Scalars['Boolean']['output']>;
};

export type PriorAuthMetadataInput = {
  gravityAuthEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  toReview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriorAuthMetrics = {
  appointmentId?: Maybe<Scalars['String']['output']>;
  authError?: Maybe<Scalars['JSON']['output']>;
  authRequirement?: Maybe<Scalars['String']['output']>;
  authResult?: Maybe<Scalars['JSON']['output']>;
  authStatus?: Maybe<Scalars['String']['output']>;
  caseNotSupported?: Maybe<Scalars['JSON']['output']>;
  caseReferenceNumber?: Maybe<Scalars['String']['output']>;
  clinicalsAvailable?: Maybe<Scalars['Boolean']['output']>;
  completed?: Maybe<Scalars['String']['output']>;
  coverageId?: Maybe<Scalars['String']['output']>;
  coverageStatus?: Maybe<PriorAuthMetricsCoverageStatus>;
  date?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  initiated?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationRead?: Maybe<LocationQueryReadResponse>;
  occurrences?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  patientId?: Maybe<Scalars['String']['output']>;
  priorAuthCoverageLinkId?: Maybe<Scalars['JSON']['output']>;
  retrievedByGravity?: Maybe<Scalars['Boolean']['output']>;
  submittedBy?: Maybe<Scalars['String']['output']>;
  submittedByGravity?: Maybe<Scalars['Boolean']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  userList?: Maybe<UserQueryListResponse>;
  visit?: Maybe<Scalars['String']['output']>;
};

export enum PriorAuthMetricsCoverageStatus {
  ActiveCoverage = 'ActiveCoverage',
  Error = 'Error',
  InTransition = 'InTransition',
  Initiated = 'Initiated',
  NoCoverage = 'NoCoverage',
  PayorNotActivated = 'PayorNotActivated',
  Pending = 'Pending'
}

export type PriorAuthPatchInput = {
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  appointmentStart?: InputMaybe<Scalars['String']['input']>;
  appointmentStatus?: InputMaybe<PriorAuthAppointmentStatus>;
  authStatus?: InputMaybe<PriorAuthAuthStatus>;
  coverage?: InputMaybe<Array<InputMaybe<PriorAuthCoverageInput>>>;
  device?: InputMaybe<Scalars['String']['input']>;
  forceInitiate?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PriorAuthMetadataInput>;
  mockScenarioId?: InputMaybe<Scalars['String']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  practitioner?: InputMaybe<PriorAuthPractitionerInput>;
  serviceCategory?: InputMaybe<PriorAuthServiceCategoryInput>;
  serviceType?: InputMaybe<PriorAuthServiceTypeInput>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type PriorAuthPractitioner = {
  id?: Maybe<Scalars['String']['output']>;
};

export type PriorAuthPractitionerInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PriorAuthQueryListResponse = {
  pages: Scalars['Float']['output'];
  resources: Array<Maybe<PriorAuth>>;
};

export type PriorAuthQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: PriorAuth;
};

export type PriorAuthServiceCategory = {
  coding?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type PriorAuthServiceCategoryInput = {
  coding?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type PriorAuthServiceType = {
  coding: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type PriorAuthServiceTypeInput = {
  coding: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum PriorAuthStatus {
  CaseAuthorized = 'CaseAuthorized',
  CaseDenied = 'CaseDenied',
  CaseNotStarted = 'CaseNotStarted',
  CaseNotSupported = 'CaseNotSupported',
  CaseP2P = 'CaseP2P',
  CasePending = 'CasePending',
  ClinicalsRequired = 'ClinicalsRequired',
  ConfirmAuthRequirement = 'ConfirmAuthRequirement',
  CoverageNoAuthRequired = 'CoverageNoAuthRequired',
  LoginError = 'LoginError',
  MissingInformationError = 'MissingInformationError',
  NetworkError = 'NetworkError',
  PatientNotFound = 'PatientNotFound',
  UnknownError = 'UnknownError',
  WorkflowTerminated = 'WorkflowTerminated'
}

export type PriorAuthWriteInput = {
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  appointmentStart?: InputMaybe<Scalars['String']['input']>;
  appointmentStatus?: InputMaybe<PriorAuthAppointmentStatus>;
  authStatus?: InputMaybe<PriorAuthAuthStatus>;
  coverage?: InputMaybe<Array<InputMaybe<PriorAuthCoverageInput>>>;
  device?: InputMaybe<Scalars['String']['input']>;
  forceInitiate?: InputMaybe<Scalars['Boolean']['input']>;
  generated?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PriorAuthMetadataInput>;
  mockScenarioId?: InputMaybe<Scalars['String']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  practitioner?: InputMaybe<PriorAuthPractitionerInput>;
  serviceCategory?: InputMaybe<PriorAuthServiceCategoryInput>;
  serviceType?: InputMaybe<PriorAuthServiceTypeInput>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  /**
   * Fetch results for DB
   *
   * Equivalent to GET /{tenant}/analytics/textDBQuery
   */
  analyticsTextDBQuery?: Maybe<TextDBQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/appointment/
   */
  appointmentList?: Maybe<AppointmentQueryListResponse>;
  /**
   * Get appointment metrics based on a given type
   *
   * Equivalent to GET /{tenant}/appointment/metrics/{type}
   */
  appointmentMetricsRead?: Maybe<AppointmentHistoryQueryMetricResponse>;
  /**
   * Get a list of nudge Eligible visits.
   *
   * Equivalent to GET /{tenant}/appointment/nudgeEligible
   */
  appointmentNudgeEligibleList?: Maybe<AppointmentQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/appointment/{id}
   */
  appointmentRead?: Maybe<AppointmentQueryReadResponse>;
  /**
   * Get a list of reschedule requests.
   *
   * Equivalent to GET /{tenant}/appointment/reschedule
   */
  appointmentRescheduleList?: Maybe<AppointmentRescheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /codeSystem/
   */
  codeSystemList?: Maybe<CodeSystemQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /codeSystem/{id}
   */
  codeSystemRead?: Maybe<CodeSystemQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /codeSystem/{id}/coding
   */
  codingList?: Maybe<CodingQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /codeSystem/{id}/coding/{coding_id}
   */
  codingRead?: Maybe<CodingQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/coverage/
   */
  coverageList?: Maybe<CoverageQueryListResponse>;
  /**
   * Get List of Coverage availity transactions.
   *
   * Equivalent to GET /{tenant}/coverage/{coverageid}/transactions
   */
  coverageListTransactions?: Maybe<CoverageQueryListTransactionResponse>;
  /**
   * Get Metrics for a given metric type.
   *
   * Equivalent to GET /{tenant}/coverage/metrics/{type}
   */
  coverageMetricRead?: Maybe<CoverageMetricsListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}
   */
  coverageRead?: Maybe<CoverageQueryReadResponse>;
  /**
   * Get Benefits by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}/benefits
   */
  coverageReadBenefits?: Maybe<CoverageBenefitsResponse>;
  /**
   * Get an Edi by ID.
   *
   * Equivalent to GET /{tenant}/coverage/{id}/edi
   */
  coverageReadEdi?: Maybe<CoverageEdiResponse>;
  /**
   * Get Coverage availity transaction.
   *
   * Equivalent to GET /{tenant}/coverage/{coverageid}/transactions/{id}
   */
  coverageReadTransactions?: Maybe<CoverageQueryReadTransactionResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/device/
   */
  deviceList?: Maybe<DeviceQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/device/{id}
   */
  deviceRead?: Maybe<DeviceQueryReadResponse>;
  /**
   * Get a list of device service duration.
   *
   * Equivalent to GET /{tenant}/device/{id}/serviceDuration
   */
  deviceServiceDurationList?: Maybe<DeviceServiceDurationQueryListResponse>;
  /**
   * Get an device service duration by serviceTypeCode.
   *
   * Equivalent to GET /{tenant}/device/{id}/serviceDuration/{serviceTypeCode}
   */
  deviceServiceDurationRead?: Maybe<DeviceServiceDurationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/document/
   */
  documentList?: Maybe<DocumentQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/document/{id}
   */
  documentRead?: Maybe<DocumentQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/document/{id}/base64
   */
  documentReadBase64?: Maybe<DocumentQueryReadImage>;
  /**
   * Get a download URL for the desktop application.
   *
   * Equivalent to GET /{tenant}/download/desktop
   */
  downloadDesktop?: Maybe<DownloadDesktop>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/estimate/
   */
  estimateList?: Maybe<EstimateQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/estimate/{id}
   */
  estimateRead?: Maybe<EstimateQueryReadResponse>;
  /**
   * Get a list of fax outreaches.
   *
   * Equivalent to GET /{tenant}/faxOutreach/
   */
  faxOutreachList?: Maybe<FaxOutreachQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/faxOutreach/{id}
   */
  faxOutreachRead?: Maybe<FaxOutreachQueryReadResponse>;
  /**
   * Get a list of fax outreaches.
   *
   * Equivalent to GET /{tenant}/faxOutreach/rule
   */
  faxOutreachRuleList?: Maybe<FaxOutreachRuleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}/fees
   */
  feeScheduleFeesList?: Maybe<FeeScheduleFeesQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}/fees/{feeId}
   */
  feeScheduleFeesRead?: Maybe<FeeScheduleFeesQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/feeSchedule/
   */
  feeScheduleList?: Maybe<FeeScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/feeSchedule/{id}
   */
  feeScheduleRead?: Maybe<FeeScheduleQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/flow/
   */
  flowList?: Maybe<FlowQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/flow/{id}
   */
  flowRead?: Maybe<FlowQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/location/
   */
  locationList?: Maybe<LocationQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/location/{id}
   */
  locationRead?: Maybe<LocationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement
   */
  lookupList?: Maybe<LookupQueryListAuthRequirementResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement/{id}
   */
  lookupRead?: Maybe<LookupQueryReadAuthRequrimentResponse>;
  /**
   * Validate authRequirement and sent the auth type
   *
   * Equivalent to GET /{tenant}/lookup/authRequirement/validate
   */
  lookupValidate?: Maybe<LookupqueryAuthRequirementValidationResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/order/
   */
  orderList?: Maybe<OrderQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/order/{id}
   */
  orderRead?: Maybe<OrderQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/{id}/contract
   */
  organizationContractList?: Maybe<OrganizationContractQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}/contract/{contractId}
   */
  organizationContractRead?: Maybe<OrganizationContractQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/{id}/feeSchedule
   */
  organizationFeeScheduleList?: Maybe<OrganizationFeeScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}/feeSchedule/{feeSchedule}
   */
  organizationFeeScheduleRead?: Maybe<OrganizationFeeScheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/organization/
   */
  organizationList?: Maybe<OrganizationQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/organization/{id}
   */
  organizationRead?: Maybe<OrganizationQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/patient/
   */
  patientList?: Maybe<PatientQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/patient/{id}
   */
  patientRead?: Maybe<PatientQueryReadResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/practitioner/
   */
  practitionerList?: Maybe<PractitionerQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/practitioner/{id}
   */
  practitionerRead?: Maybe<PractitionerQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/coverage/{coverage}
   */
  priorAuthCoverageRead?: Maybe<PriorAuthCoverageQueryReadResponse>;
  /**
   * Get a list of history events.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}/history
   */
  priorAuthHistoryList?: Maybe<PriorAuthHistoryQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/priorAuth/
   */
  priorAuthList?: Maybe<PriorAuthQueryListResponse>;
  /**
   * Get an metrics by metrics type.
   *
   * Equivalent to GET /{tenant}/priorAuth/metrics/{type}
   */
  priorAuthMetricsRead?: Maybe<PriorAuthHistoryQueryMetricResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/priorAuth/{id}
   */
  priorAuthRead?: Maybe<PriorAuthQueryReadResponse>;
  /**
   * Get a list of all schedule events.
   *
   * Equivalent to GET /{tenant}/schedule/events
   */
  scheduleEvents?: Maybe<ScheduleQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/schedule/
   */
  scheduleList?: Maybe<ScheduleQueryListResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/schedule/{id}
   */
  scheduleRead?: Maybe<ScheduleQueryReadResponse>;
  /**
   * Get a list of available slots.
   *
   * Equivalent to GET /{tenant}/schedule/slot
   */
  scheduleSlotList?: Maybe<ScheduleSlotQueryListResponse>;
  /**
   * Get a list of entities.
   *
   * Equivalent to GET /{tenant}/sync/
   */
  syncList?: Maybe<SyncQueryListResponse>;
  /**
   * Get an metrics by metrics type.
   *
   * Equivalent to GET /{tenant}/sync/metrics/{type}
   */
  syncMetricsRead?: Maybe<SyncQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/sync/{id}
   */
  syncRead?: Maybe<SyncQueryReadResponse>;
  /**
   * Get a list of resource configs.
   *
   * Equivalent to GET /tenant/{tenant}/config
   */
  tenantConfigList?: Maybe<TenantConfigQueryListResponse>;
  /**
   * Get an resource config by ID.
   *
   * Equivalent to GET /tenant/{tenant}/config/{id}
   */
  tenantConfigRead?: Maybe<TenantConfigQueryReadResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /tenant/{tenant}
   */
  tenantRead?: Maybe<TenantQueryReadResponse>;
  /**
   * Fetch patients that are eligible for nudge.
   *
   * Equivalent to GET /{tenant}/textOutreach/eligible-for-nudge
   */
  textOutreachFetchEligibleForNudge?: Maybe<TextOutreachFetchEligibilityResponse>;
  /**
   * List all entities.
   *
   * Equivalent to GET /{tenant}/textOutreach/
   */
  textOutreachList?: Maybe<TextOutreachQueryListResponse>;
  /**
   * Fetches analytics metrics for textOutreach.
   *
   * Equivalent to GET /{tenant}/textOutreach/metrics/{type}
   */
  textOutreachMetrics?: Maybe<TextOutreachQueryMetricResponse>;
  /**
   * Get an entity by ID.
   *
   * Equivalent to GET /{tenant}/textOutreach/{id}
   */
  textOutreachRead?: Maybe<TextOutreachQueryReadResponse>;
  /**
   * Get a list of nudge URLs.
   *
   * Equivalent to GET /url/nudge
   */
  urlNudgeList?: Maybe<UrlNudgeQueryListResponse>;
  /**
   * Fetched analytics metrics for urlNudge
   *
   * Equivalent to GET /url/metrics/{type}
   */
  urlNudgeMetrics?: Maybe<UrlNudgeQueryMetricResponse>;
  /**
   * Get an nudge URL by ID.
   *
   * Equivalent to GET /url/nudge/{id}
   */
  urlNudgeRead?: Maybe<UrlNudgeQueryReadResponse>;
  /**
   * Get a list of users.
   *
   * Equivalent to GET /{tenant}/user/
   */
  userList?: Maybe<UserQueryListResponse>;
  /**
   * Get a user by username.
   *
   * Equivalent to GET /{tenant}/user/{username}
   */
  userRead?: Maybe<UserQueryReadResponse>;
  /**
   * Get a user by ID.
   *
   * Equivalent to GET /{tenant}/user/id/{id}
   */
  userReadById?: Maybe<UserQueryReadResponse>;
};


export type QueryanalyticsTextDBQueryArgs = {
  sqlQuery?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryappointmentListArgs = {
  basedOn?: InputMaybe<Scalars['String']['input']>;
  device?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order2>;
  orderBy?: InputMaybe<OrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  patient?: InputMaybe<Scalars['String']['input']>;
  rescheduleRequestCreatedTime?: InputMaybe<Scalars['String']['input']>;
  rescheduleStartTime?: InputMaybe<Scalars['String']['input']>;
  rescheduleStatus?: InputMaybe<RescheduleStatus>;
  search?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<Scalars['String']['input']>;
  serviceCode?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type QueryappointmentMetricsReadArgs = {
  device?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QueryappointmentNudgeEligibleListArgs = {
  device?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  minutesDuration?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Order2>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeCode?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryappointmentReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryappointmentRescheduleListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order3>;
  orderBy?: InputMaybe<OrderBy2>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerycodeSystemListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order4>;
  orderBy?: InputMaybe<OrderBy3>;
  page?: InputMaybe<Scalars['Int']['input']>;
  system?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycodeSystemReadArgs = {
  id: Scalars['String']['input'];
};


export type QuerycodingListArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycodingReadArgs = {
  codingId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QuerycoverageListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order5>;
  orderBy?: InputMaybe<OrderBy4>;
  organization?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  patient?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycoverageListTransactionsArgs = {
  coverageid: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerycoverageMetricReadArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QuerycoverageReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerycoverageReadBenefitsArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerycoverageReadEdiArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerycoverageReadTransactionsArgs = {
  coverageid: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerydeviceListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nudgeable?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Order6>;
  orderBy?: InputMaybe<OrderBy5>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerydeviceReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerydeviceServiceDurationListArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerydeviceServiceDurationReadArgs = {
  id: Scalars['String']['input'];
  serviceTypeCode: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerydocumentListArgs = {
  actionRequired?: InputMaybe<Scalars['String']['input']>;
  appointment?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order7>;
  orderBy?: InputMaybe<OrderBy6>;
  page?: InputMaybe<Scalars['Int']['input']>;
  patient?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerydocumentReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerydocumentReadBase64Args = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerydownloadDesktopArgs = {
  beta?: InputMaybe<Scalars['Boolean']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryestimateListArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<Order8>;
  orderBy?: InputMaybe<OrderBy7>;
  page?: InputMaybe<Scalars['Float']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryestimateReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryfaxOutreachListArgs = {
  intent?: InputMaybe<Intent>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order9>;
  orderBy?: InputMaybe<OrderBy8>;
  page?: InputMaybe<Scalars['Int']['input']>;
  practitioner?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status2>;
  tenant: Scalars['String']['input'];
  today?: InputMaybe<Scalars['Boolean']['input']>;
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type QueryfaxOutreachReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryfaxOutreachRuleListArgs = {
  intent?: InputMaybe<Intent>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order10>;
  orderBy?: InputMaybe<OrderBy9>;
  page?: InputMaybe<Scalars['Int']['input']>;
  practitioner?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryfeeScheduleFeesListArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order11>;
  orderBy?: InputMaybe<OrderBy10>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceTypeCode?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryfeeScheduleFeesReadArgs = {
  feeId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryfeeScheduleListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order11>;
  orderBy?: InputMaybe<OrderBy10>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryfeeScheduleReadArgs = {
  id: Scalars['String']['input'];
  serviceType?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryflowListArgs = {
  appointmentId?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order12>;
  orderBy?: InputMaybe<OrderBy11>;
  page?: InputMaybe<Scalars['Int']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  visitId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryflowReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerylocationListArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  managingOrganization?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  npi?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order13>;
  orderBy?: InputMaybe<OrderBy12>;
  page?: InputMaybe<Scalars['Int']['input']>;
  partOf?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerylocationReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerylookupListArgs = {
  ediId?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isAuthRequired?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceType?: InputMaybe<ServiceType2Input>;
  subscriberPrefix?: InputMaybe<Scalars['String']['input']>;
  susanOutput?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerylookupReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerylookupValidateArgs = {
  ediId?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  serviceTypeCode?: InputMaybe<Scalars['String']['input']>;
  subscriberPrefix?: InputMaybe<Scalars['String']['input']>;
  susanOutput?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryorderListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order14>;
  orderBy?: InputMaybe<OrderBy13>;
  page?: InputMaybe<Scalars['Int']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryorderReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryorganizationContractListArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order17>;
  orderBy?: InputMaybe<OrderBy16>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryorganizationContractReadArgs = {
  contractId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryorganizationFeeScheduleListArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order16>;
  orderBy?: InputMaybe<OrderBy15>;
  page?: InputMaybe<Scalars['Int']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryorganizationFeeScheduleReadArgs = {
  feeSchedule: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryorganizationListArgs = {
  active?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inNetwork?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order15>;
  orderBy?: InputMaybe<OrderBy14>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  telecom?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryorganizationReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerypatientListArgs = {
  birthDate?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order18>;
  orderBy?: InputMaybe<OrderBy17>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerypatientReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerypractitionerListArgs = {
  doNotContact?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isPriorAuthSubmissionEnabled?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  npi?: InputMaybe<Scalars['String']['input']>;
  nudgeable?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Order19>;
  orderBy?: InputMaybe<OrderBy18>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerypractitionerReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerypriorAuthCoverageReadArgs = {
  coverage: Scalars['String']['input'];
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerypriorAuthHistoryListArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerypriorAuthListArgs = {
  appointment?: InputMaybe<Scalars['String']['input']>;
  appointmentStart?: InputMaybe<Scalars['String']['input']>;
  appointmentStatus?: InputMaybe<AppointmentStatus2>;
  appointmentTimeFilterEnd?: InputMaybe<Scalars['String']['input']>;
  appointmentTimeFilterStart?: InputMaybe<Scalars['String']['input']>;
  authStatus?: InputMaybe<AuthStatus>;
  coverageId?: InputMaybe<Scalars['String']['input']>;
  coverageStatus?: InputMaybe<CoverageStatus2>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  insurance?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadataGravityAuthEnabled?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Order20>;
  orderBy?: InputMaybe<OrderBy19>;
  page?: InputMaybe<Scalars['Int']['input']>;
  patientId?: InputMaybe<Scalars['String']['input']>;
  practitionerId?: InputMaybe<Scalars['String']['input']>;
  priorAuthStatus?: InputMaybe<PriorAuthStatus>;
  priorAuthSubmissionEnabled?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  serviceCategory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerypriorAuthMetricsReadArgs = {
  authType?: InputMaybe<Scalars['String']['input']>;
  dimensionDate?: InputMaybe<DimensionDate>;
  from?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priorAuthCoverageLinkId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  serviceCategory?: InputMaybe<Scalars['String']['input']>;
  submittedBy?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QuerypriorAuthReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryscheduleEventsArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  resourceId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ResourceType>;
  start?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryscheduleListArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  resourceId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ResourceType>;
  start?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QueryscheduleReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryscheduleSlotListArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  resourceId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ResourceType>;
  serviceTypeCode?: InputMaybe<Scalars['String']['input']>;
  slotDuration?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerysyncListArgs = {
  acknowledgedAt?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order21>;
  orderBy?: InputMaybe<OrderBy20>;
  page?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEventId?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerysyncMetricsReadArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QuerysyncReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerytenantConfigListArgs = {
  config?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
};


export type QuerytenantConfigReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QuerytenantReadArgs = {
  tenant: Scalars['String']['input'];
};


export type QuerytextOutreachFetchEligibleForNudgeArgs = {
  resourceId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<ResourceType2>;
  tenant: Scalars['String']['input'];
};


export type QuerytextOutreachListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order22>;
  orderBy?: InputMaybe<OrderBy21>;
  page?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Status3>;
  tenant: Scalars['String']['input'];
  today?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Type>;
  visit?: InputMaybe<Scalars['String']['input']>;
};


export type QuerytextOutreachMetricsArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QuerytextOutreachReadArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};


export type QueryurlNudgeListArgs = {
  appointment?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order23>;
  orderBy?: InputMaybe<OrderBy22>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryurlNudgeMetricsArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type QueryurlNudgeReadArgs = {
  id: Scalars['String']['input'];
};


export type QueryuserListArgs = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Role>;
  sub?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tenant: Scalars['String']['input'];
};


export type QueryuserReadArgs = {
  tenant: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type QueryuserReadByIdArgs = {
  id: Scalars['String']['input'];
  tenant: Scalars['String']['input'];
};

export enum RescheduleStatus {
  booked = 'booked',
  canceled = 'canceled',
  pending = 'pending'
}

export enum ResourceType {
  device = 'device',
  practitioner = 'practitioner'
}

export enum ResourceType2 {
  device = 'device',
  practitioner = 'practitioner'
}

export enum Role {
  admin = 'admin',
  user = 'user'
}

export type Schedule = {
  allowedServiceTypes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  byweekday?: Maybe<Array<Maybe<ScheduleWeekdays>>>;
  created?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dtstart: Scalars['String']['output'];
  durationMinutes: Scalars['Float']['output'];
  frequency: ScheduleFrequency;
  id: Scalars['String']['output'];
  resourceId: Scalars['String']['output'];
  resourceType: ScheduleResourceType;
  status: ScheduleStatus;
  tenant?: Maybe<Scalars['String']['output']>;
  until: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
  wkst?: Maybe<ScheduleWeekdays>;
};

export type ScheduleCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type ScheduleEvent = {
  allowedServiceTypes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  created?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  resourceType?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export enum ScheduleFrequency {
  daily = 'daily',
  hourly = 'hourly',
  minutely = 'minutely',
  monthly = 'monthly',
  secondely = 'secondely',
  weekly = 'weekly',
  yearly = 'yearly'
}

export type ScheduleQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<ScheduleEvent>>;
};

export type ScheduleQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: Schedule;
};

export enum ScheduleResourceType {
  device = 'device',
  practitioner = 'practitioner'
}

export type ScheduleSlot = {
  durationMinutes?: Maybe<Scalars['Int']['output']>;
  resourceId?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<ScheduleResourceType>;
  start?: Maybe<Scalars['String']['output']>;
};

export type ScheduleSlotQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<ScheduleSlot>>;
};

export type ScheduleSlotsInput = {
  created?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  resourceId: Scalars['String']['input'];
  resourceType: ScheduleSlotsResourceType;
  slotDate: Scalars['String']['input'];
  slots?: InputMaybe<Array<InputMaybe<ScheduleSlotsListInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduleSlotsListInput = {
  allowedServiceTypes?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  created?: InputMaybe<Scalars['String']['input']>;
  durationMinutes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  slotsId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  status: ScheduleSlotsStatus;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export enum ScheduleSlotsResourceType {
  device = 'device',
  practitioner = 'practitioner'
}

export enum ScheduleSlotsStatus {
  close = 'close',
  open = 'open',
  restrict = 'restrict'
}

export enum ScheduleStatus {
  close = 'close',
  open = 'open',
  restrict = 'restrict'
}

export enum ScheduleWeekdays {
  FR = 'FR',
  MO = 'MO',
  SA = 'SA',
  SU = 'SU',
  TH = 'TH',
  TU = 'TU',
  WE = 'WE'
}

export type ScheduleWriteInput = {
  allowedServiceTypes?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  byweekday?: InputMaybe<Array<InputMaybe<ScheduleWeekdays>>>;
  created?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dtstart: Scalars['String']['input'];
  durationMinutes: Scalars['Float']['input'];
  frequency: ScheduleFrequency;
  id?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
  resourceType: ScheduleResourceType;
  status: ScheduleStatus;
  tenant?: InputMaybe<Scalars['String']['input']>;
  until: Scalars['String']['input'];
  updated?: InputMaybe<Scalars['String']['input']>;
  wkst?: InputMaybe<ScheduleWeekdays>;
};

export type ServiceType2Input = {
  coding?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum Status {
  arrived = 'arrived',
  booked = 'booked',
  bookingPending = 'bookingPending',
  canceled = 'canceled',
  checked_in = 'checked_in',
  completed = 'completed',
  pending = 'pending'
}

export enum Status2 {
  failure = 'failure',
  pending = 'pending',
  success = 'success'
}

export enum Status3 {
  Delivered = 'Delivered',
  Failed = 'Failed',
  Initiated = 'Initiated',
  Sent = 'Sent',
  Undelivered = 'Undelivered'
}

export type Subscription = {
  appointmentChanged?: Maybe<AppointmentQueryReadResponse>;
  coverageChanged?: Maybe<CoverageQueryReadResponse>;
  deviceChanged?: Maybe<DeviceQueryReadResponse>;
  documentAdded?: Maybe<DocumentQueryReadResponse>;
  documentChanged?: Maybe<DocumentQueryReadResponse>;
  locationChanged?: Maybe<LocationQueryReadResponse>;
  organizationChanged?: Maybe<OrganizationQueryReadResponse>;
  patientChanged?: Maybe<PatientQueryReadResponse>;
  practitionerChanged?: Maybe<PractitionerQueryReadResponse>;
  priorAuthAdded?: Maybe<PriorAuthQueryReadResponse>;
  priorAuthChanged?: Maybe<PriorAuthQueryReadResponse>;
};


export type SubscriptionappointmentChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptioncoverageChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptiondeviceChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptiondocumentAddedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptiondocumentChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionlocationChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionorganizationChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionpatientChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionpractitionerChangedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionpriorAuthAddedArgs = {
  tenant: Scalars['String']['input'];
};


export type SubscriptionpriorAuthChangedArgs = {
  tenant: Scalars['String']['input'];
};

export type Sync = {
  acknowledgedAt?: Maybe<Scalars['String']['output']>;
  eventData?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  eventType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subEventId?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
};

export type SyncCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type SyncPatchInput = {
  acknowledgedAt?: InputMaybe<Scalars['String']['input']>;
  eventData?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEventId?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type SyncQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<Sync>>;
};

export type SyncQueryReadResponse = {
  resource: Sync;
};

export type SyncWriteInput = {
  acknowledgedAt?: InputMaybe<Scalars['String']['input']>;
  eventData?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  subEventId?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  updated?: InputMaybe<Scalars['String']['input']>;
};

export type Tenant = {
  currentStack?: Maybe<Scalars['String']['output']>;
  deployment: TenantDeployment;
  id: Scalars['String']['output'];
  integrationInbound?: Maybe<TenantIntegrationInbound>;
  integrationOutbound?: Maybe<TenantIntegrationOutbound>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  migrationStatus?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  services: Array<Maybe<TenantServices>>;
  shortName: Scalars['String']['output'];
  status?: Maybe<TenantStatus>;
  telecom?: Maybe<Array<Maybe<TenantTelecom>>>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type TenantConfig = {
  config: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  group: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Float']['output']>;
  value: Scalars['String']['output'];
};

export type TenantConfigQueryListResponse = {
  resources: Array<Maybe<TenantConfig>>;
};

export type TenantConfigQueryReadResponse = {
  resource: TenantConfig;
};

export enum TenantDeployment {
  pool = 'pool',
  silo = 'silo'
}

export enum TenantIntegrationInbound {
  athena = 'athena',
  hl7 = 'hl7',
  modmed = 'modmed'
}

export enum TenantIntegrationOutbound {
  athena = 'athena',
  hl7 = 'hl7',
  modmed = 'modmed'
}

export type TenantQueryReadResponse = {
  resource: Tenant;
};

export enum TenantServices {
  GravityAuth = 'GravityAuth',
  GravityBooking = 'GravityBooking',
  GravityFlow = 'GravityFlow'
}

export enum TenantStatus {
  active = 'active',
  creationFailed = 'creationFailed',
  creationPending = 'creationPending',
  inactive = 'inactive'
}

export type TenantTelecom = {
  rank?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  use?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TextDBQueryListResponse = {
  resources: Array<Maybe<Scalars['JSON']['output']>>;
};

export type TextOutreach = {
  created?: Maybe<Scalars['String']['output']>;
  deliveredTime?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  patient?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  resourceId?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<TextOutreachNudgeResourceType>;
  sentTime?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TextOutreachStatus>;
  tenant?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TextOutreachType>;
  updated?: Maybe<Scalars['String']['output']>;
  visit?: Maybe<Scalars['String']['output']>;
};

export type TextOutreachCommandInput = {
  type: TextOutreachQueryType;
  visit: Scalars['String']['input'];
};

export type TextOutreachCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type TextOutreachEligibility = {
  id: Scalars['String']['output'];
  visit: Scalars['String']['output'];
};

export type TextOutreachFetchEligibilityResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<TextOutreachEligibility>>;
};

export type TextOutreachMetrics = {
  date?: Maybe<Scalars['String']['output']>;
  occurrences?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TextOutreachType>;
};

export enum TextOutreachNudgeResourceType {
  device = 'device',
  practitioner = 'practitioner'
}

export type TextOutreachQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<TextOutreach>>;
};

export type TextOutreachQueryMetricResponse = {
  resource?: Maybe<TextOutreachMetrics>;
  resources?: Maybe<Array<Maybe<TextOutreachMetrics>>>;
};

export type TextOutreachQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: TextOutreach;
};

export enum TextOutreachQueryType {
  Nudge = 'Nudge',
  RescheduleFailed = 'RescheduleFailed',
  RescheduleSuccess = 'RescheduleSuccess'
}

export enum TextOutreachStatus {
  Delivered = 'Delivered',
  Failed = 'Failed',
  Initiated = 'Initiated',
  Sent = 'Sent',
  Undelivered = 'Undelivered'
}

export enum TextOutreachType {
  Nudge = 'Nudge',
  RescheduleFailed = 'RescheduleFailed',
  RescheduleSuccess = 'RescheduleSuccess'
}

export enum Type {
  Nudge = 'Nudge',
  RescheduleFailed = 'RescheduleFailed',
  RescheduleSuccess = 'RescheduleSuccess'
}

export type UrlNudge = {
  appointment: Scalars['String']['output'];
  created?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant: Scalars['String']['output'];
  updated?: Maybe<Scalars['String']['output']>;
  urlOpenedAt?: Maybe<Scalars['String']['output']>;
};

export type UrlNudgeCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type UrlNudgeInput = {
  appointment: Scalars['String']['input'];
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['String']['input'];
  updated?: InputMaybe<Scalars['String']['input']>;
  urlOpenedAt?: InputMaybe<Scalars['String']['input']>;
};

export type UrlNudgeMetrics = {
  date?: Maybe<Scalars['String']['output']>;
  occurrences?: Maybe<Scalars['Float']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
};

export type UrlNudgeQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<UrlNudge>>;
};

export type UrlNudgeQueryMetricResponse = {
  resource?: Maybe<UrlNudgeMetrics>;
  resources?: Maybe<Array<Maybe<UrlNudgeMetrics>>>;
};

export type UrlNudgeQueryReadResponse = {
  id: Scalars['String']['output'];
  resource: UrlNudge;
};

export type User = {
  created: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  modified: Scalars['String']['output'];
  role: UserRole;
  sub: Scalars['String']['output'];
  tenant: Scalars['String']['output'];
  tenants?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  username: Scalars['String']['output'];
};

export type UserCommandResponse = {
  resourceID: Scalars['String']['output'];
};

export type UserCreateCredentialsInput = {
  idToken: Scalars['String']['input'];
};

export type UserCreateCredentialsResponse = {
  accessKeyId: Scalars['String']['output'];
  expiration: Scalars['String']['output'];
  secretKey: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type UserQueryListResponse = {
  pages: Scalars['Int']['output'];
  resources: Array<Maybe<User>>;
};

export type UserQueryReadResponse = {
  resource: User;
};

export enum UserRole {
  admin = 'admin',
  user = 'user'
}

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LocationCreateMutationVariables = Exact<{
  requestBody: LocationWriteInput;
  tenantInput: Scalars['String'];
}>;


export type LocationCreateMutation = { locationCreate?: { resourceID: string } | null };

export type LocationListQueryVariables = Exact<{
  tenantInput: Scalars['String'];
}>;


export type LocationListQuery = { locationList?: { pages: number, resources?: Array<{ address?: string | null, alias?: string | null, description?: string | null, id: string, managingOrganization?: string | null, name: string, npi?: string | null, partOf?: string | null, status?: string | null, tag?: string | null, taxId?: string | null, tenant?: string | null, type?: string | null, updatedAt?: number | null, telecom?: Array<{ rank?: number | null, system?: string | null, use?: string | null, value?: string | null } | null> | null } | null> | null } | null };


export const LocationCreateDocument = gql`
    mutation LocationCreate($requestBody: LocationWriteInput!, $tenantInput: String!) {
  locationCreate(requestBody: $requestBody, tenant: $tenantInput) {
    resourceID
  }
}
    `;
export type LocationCreateMutationFn = Apollo.MutationFunction<LocationCreateMutation, LocationCreateMutationVariables>;

/**
 * __useLocationCreateMutation__
 *
 * To run a mutation, you first call `useLocationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationCreateMutation, { data, loading, error }] = useLocationCreateMutation({
 *   variables: {
 *      requestBody: // value for 'requestBody'
 *      tenantInput: // value for 'tenantInput'
 *   },
 * });
 */
export function useLocationCreateMutation(baseOptions?: Apollo.MutationHookOptions<LocationCreateMutation, LocationCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LocationCreateMutation, LocationCreateMutationVariables>(LocationCreateDocument, options);
      }
export type LocationCreateMutationHookResult = ReturnType<typeof useLocationCreateMutation>;
export type LocationCreateMutationResult = Apollo.MutationResult<LocationCreateMutation>;
export type LocationCreateMutationOptions = Apollo.BaseMutationOptions<LocationCreateMutation, LocationCreateMutationVariables>;
export const LocationListDocument = gql`
    query LocationList($tenantInput: String!) {
  locationList(tenant: $tenantInput) {
    pages
    resources {
      address
      alias
      description
      id
      managingOrganization
      name
      npi
      partOf
      status
      tag
      taxId
      telecom {
        rank
        system
        use
        value
      }
      tenant
      type
      updatedAt
    }
  }
}
    `;

/**
 * __useLocationListQuery__
 *
 * To run a query within a React component, call `useLocationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationListQuery({
 *   variables: {
 *      tenantInput: // value for 'tenantInput'
 *   },
 * });
 */
export function useLocationListQuery(baseOptions: Apollo.QueryHookOptions<LocationListQuery, LocationListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationListQuery, LocationListQueryVariables>(LocationListDocument, options);
      }
export function useLocationListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationListQuery, LocationListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationListQuery, LocationListQueryVariables>(LocationListDocument, options);
        }
export type LocationListQueryHookResult = ReturnType<typeof useLocationListQuery>;
export type LocationListLazyQueryHookResult = ReturnType<typeof useLocationListLazyQuery>;
export type LocationListQueryResult = Apollo.QueryResult<LocationListQuery, LocationListQueryVariables>;