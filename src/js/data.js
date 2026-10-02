/**
 * @typedef {{name: string, key: string, tooltip?: string, checked?: boolean, sub?: {name: string, tooltip?: string, checked?: string}[]}[]} Options
 * @typedef {{name: string, img: string, opts: Object<string, boolean|number[]}[]} CharData
*/

/**
 * Data set. Characters will be removed from the sorting array based on selected options, working down the array.
 * 
 * @type {Object.<string, {options: Options, characterData: CharData}>}
*/
const dataSet = {};

/** 
 * Data set version, in YYYY-MM-DD form.
 * 
 * @example '2018-02-20'
*/
let dataSetVersion = '';

/**
 * Image root, will be appended to the start of every image URL.
 */
const imageRoot = 'src/assets/chars/';

/**
 * Audio root, will be appended to the start of every audio filename (30 second previews, only loaded when play is pressed).
 */
const audioRoot = 'src/assets/audio/';
