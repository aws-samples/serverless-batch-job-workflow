/*! 
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
* Sample Lambda function which mocks the operation of checking the number of batch job needs to fan out.
* For demonstration purposes this Lambda function simply returns a random integer between 2 and 10 as the batch job instance.
* 
* @param {Object} event - Input event to the Lambda function
* @param {Object} context - Lambda Context runtime methods and attributes
*
* @returns {Object} object - Object containing the number of batch jobs need to fan out
* 
*/
exports.lambdaHandler = async event => {
  // Calculate the batch job instance needed
  const batch_num = getRandomInt(2, 10);  // Current batch job number needed is mocked as a random integer between 2 and 10
  return Array(batch_num).fill(null).map((_, i) => i);
}