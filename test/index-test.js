import { expect } from 'chai'
import radiumPluginPrefixAll from '../lib/index'

describe('Adding all vendor prefixes', () => {
  it('should add all major vendor prefixes for hyphens', () => {
    const input = {hyphens: 'auto'}
    const output = {
      WebkitHyphens: 'auto',
      MozHyphens: 'auto',
      msHyphens: 'auto',
      hyphens: 'auto'
    }
    expect(radiumPluginPrefixAll({style: input})).to.deep.eql({
      style: output
    })
  })

  it('should add necessary prefixes for flex-direction', () => {
    const input = {flexDirection: 'row'}
    const output = {
      WebkitFlexDirection: 'row',
      // MozFlexDirection: 'row', // No longer necessary
      msFlexDirection: 'row',
      flexDirection: 'row',
      WebkitBoxDirection: 'normal',
      WebkitBoxOrient: 'horizontal'
    }
    expect(radiumPluginPrefixAll({style: input})).to.deep.eql({
      style: output
    })
  })

  it('should add necessary prefixes for transform', () => {
    const input = {transform: 'rotate(30deg)'}
    const output = {
      WebkitTransform: 'rotate(30deg)',
      msTransform: 'rotate(30deg)',
      transform: 'rotate(30deg)'
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
