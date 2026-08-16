---
prev:
  text: 'github LGTM'
  link: '/github-lgtm'
next: 
  text: 'Team & Contributors'
  link: '/team'
---

<!--
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-14 19:23:30
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-17 00:19:05
 * @FilePath: \merchant-admin\docs\our-team\index.md
 * @Description: file
-->

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/273025146?v=4',
    name: 'Alininin',
    title: 'Creator & Agent Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/Alininin' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/267605019?v=4',
    name: 'Camille',
    title: 'Creator & Algorithm Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/L-y-MAX' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/166358870?s=400&v=4',
    name: 'Skixkk',
    title: 'Creator | Quant & Full Stack',
    links: [
      { icon: 'github', link: 'https://github.com/Skixkk' },
    ]
  },
]
</script>

# Our Team

> Thank you to our outstanding team members and contributors for their contributions

<VPTeamMembers size="small" :members />
