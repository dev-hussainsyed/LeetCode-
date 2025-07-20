// 1948. Delete Duplicate Folders in System

// 1. Solution

var deleteDuplicateFolder = function(paths) {

  // Here i've built folder tree as nested objects
  
  const root = {};

  for (const path of paths) {
    let curr = root;
    for (const folder of path) {
      if (!curr[folder]) curr[folder] = {};
      curr = curr[folder];
    }
  }

  const serialMap = new Map();
  const deleted = new Set();

  // Serialize each subtree to a string
  function serialize(node) {
    if (!node || Object.keys(node).length === 0) {
      return "()";
    }
    // Sort keys for consistent serialization order
    const items = [];
    const keys = Object.keys(node).sort();
    for (const key of keys) {
      items.push(key + serialize(node[key]));
    }
    const serial = "(" + items.join("") + ")";
    if (!serialMap.has(serial)) {
      serialMap.set(serial, []);
    }
    serialMap.get(serial).push(node);
    return serial;
  }

  serialize(root);

  // Mark duplicate subtrees for deletion
  for (const nodes of serialMap.values()) {
    if (nodes.length > 1) {
      for (const node of nodes) {
        deleted.add(node);
      }
    }
  }

  const ans = [];

  // DFS to collect remaining folder paths
  function dfs(node, path) {
    if (deleted.has(node)) return;
    for (const [name, child] of Object.entries(node)) {
      dfs(child, [...path, name]);
    }
    if (path.length > 0) {
      ans.push(path);
    }
  }

  dfs(root, []);
  console.log("Answer is: ", ans);
  return ans;
};



// 2. Test 

const paths = [
  ["a"], ["a", "x"], ["a", "x", "y"], ["a", "z"],
  ["b"], ["b", "x"], ["b", "x", "y"], ["b", "z"]
];

console.log(deleteDuplicateFolder(paths));
