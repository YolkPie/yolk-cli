const download = require('download-git-repo');
const request = require('./request');
const { orgName } = require('../../config');

class Git {
  constructor() {
    this.orgName = orgName;
  }

  /**
   * 获取项目组中的项目模板列表
   */
  getProjectList() {
    return request(`/orgs/${this.orgName}/repos`);
  }

  /**
   * 下载 github 项目
   * @param {Object} param 项目git地址 本地开发目录
   */
  downloadProject ({ projectUrl, repoPath }) {
    return new Promise((resolve, reject) => {
      download(`direct:${projectUrl}`, repoPath, {
        clone: true
      }, (err) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
}

module.exports = Git;