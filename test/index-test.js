import { expect } from 'chai'
import radiumPluginPrefixAll from '../lib/index'

describe('Adding all vendor prefixes', () => {
  it('should add all major vendor prefixes', () => {
    const input = {flexDirection: 'row'}
    const output = {
      WebkitFlexDirection: 'row',
      MozFlexDirection: 'row',
      msFlexDirection: 'row',
      flexDirection: 'row'
    }
    expect(radiumPluginPrefixAll({style: input})).to.deep.eql({
      style: output
    })
  })

  it('should do nothing with standard values', () => {
    const input = {width: 100}
    const output = {width: 100}
    expect(radiumPluginPrefixAll({style: input})).to.deep.eql({
      style: output
    })
  })
})
