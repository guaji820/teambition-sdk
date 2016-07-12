'use strict'
import { Schema, schemaName, ISchema } from './schema'
import { visibility } from '../teambition'

export interface EventData extends ISchema<EventData> {
  _id: string
  _creatorId: string
  title: string
  content: string
  location: string
  startDate: string
  endDate: string
  untilDate: string
  involveMembers: string []
  _projectId: string
  _sourceId: string
  sourceDate: string
  source: string
  recurrence: string[]
  reminders: string[]
  isArchived: boolean
  visible: visibility
  isDeleted: boolean
  created: string
  updated: string
  tagIds: string[]
  status?: string
  isFavorite?: boolean
  objectlinksCount?: number
}

@schemaName('Event')
export default class Event extends Schema implements EventData {
  _id: string = undefined
  endDate: string = undefined
  startDate: string = undefined
  _projectId: string = undefined
  location: string = undefined
  content: string = undefined
  title: string = undefined
  _creatorId: string = undefined
  tagIds: string[] = undefined
  updated: string = undefined
  created: string = undefined
  visible: visibility = undefined
  isArchived: boolean = undefined
  involveMembers: string [] = undefined
  untilDate: string = undefined
  _sourceId: string = undefined
  sourceDate: string = undefined
  isDeleted: boolean = undefined
  recurrence: string[] = undefined
  reminders: string[] = undefined
  source: string = undefined
}
