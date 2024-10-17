import * as assert from 'node:assert'
import { describe, it } from 'node:test'
import { add } from '../src/index.js'

describe('add', () => {
	it('adds', () => {
		assert.strictEqual(add(1, 2), 3)
	})
})
