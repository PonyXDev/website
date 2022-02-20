import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';

const items = [
  { icon: 'fab fa-github', link: 'https://github.com/PonyxDev' },
  { icon: 'fab fa-discord', link: 'https://discord.com/users/481425230636646419' },
]

export default function Home() {
  const { data: _profile } = swr('https://linkcord.swoth.xyz/api/v1/user/481425230636646419');
  const profile = _profile ? _profile.data : null;

  const { data: _repositories } = swr('/api/repos');
  const repositories = _repositories ? _repositories : null;

  const { data: _technologies } = swr('/api/techs');
  const technologies = _technologies ? _technologies : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
        {_profile ? (
          profile ? (
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  PonyX
                </p>
                
                    <span className="ml-2 bg-black/20 px-2 py-1 font-normal rounded-md text-sm">
                      Back-End Developer and UI Designer
                    </span>
                    
                </div> 
                <p className="text-white/50 text-neutral-500">&nbsp;&nbsp;
                Hello, I'm PonyX. I'm a self-taught UI and Back-And developer. Founder of Magnet Community and developer of Wolf Partner bot. If you want to get to know me more, 
                be sure to check out my Discord server or github!
                </p>
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <img alt="ponyx" src={`https://cdn.discordapp.com/avatars/${profile.user.id}/${profile.user.avatar}`} width="160" height="160" className="bg-neutral-700 w-[160px] h-[160px] rounded-full" />
                <div className={`${profile.user.status !== "offline" ? 'bg-red-700' : 'bg-neutral-700'} absolute bottom-0 right-4 border-[5px] border-neutral-800/20 w-[32px] h-[32px] rounded-full`} />
              </div>
              
            </div>
            
          </div>
          
          ) : (
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
                <div className="mt-2 bg-neutral-700 animate-pulse w-[95%] h-[96px] rounded-md" />
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
                <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
            <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
              <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
              <div className="mt-2 bg-neutral-700/30 animate-pulse w-[95%] h-[96px] rounded-md" />
            </div>
            <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
              <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
              <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
            </div>
          </div>
        )}
      </div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Shortcuts</p>
        <p className="text-xl text-white/50 font-normal">Shortcuts to all pages.</p>
		<div data-v-bddc70d4="" class="mt-4 grid gap-4 md:grid-cols-2">
			<div class="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
				<div class="flex justify-between items-center w-full">
					<div class="flex justify-center items-center h-[26px]"></div>
					<div>
						<h2 class="font-medium truncate dark:text-neutral-100">
            Projects
    </h2> 
						<p class="text-neutral-500 line-clamp-2">Special page I created for projects that I have coded in my own way!</p>
					</div>
				</div>
			</div>
			<div class="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
				<div class="flex justify-between items-center w-full">
					<div class="flex justify-center items-center h-[26px]"></div>
					<div>
						<h2 class="font-medium truncate dark:text-neutral-100">
      Goals
    </h2> 
						<p class="text-neutral-500 line-clamp-2">Here are a few of my goals that I will start sharing very soon!</p>
					</div>
				</div>
			</div>
			<div class="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
				<div class="flex justify-between items-center w-full">
					<div class="flex justify-center items-center h-[26px]"></div>
					<div>
						<h2 class="font-medium truncate dark:text-neutral-100">
      Github/Repo
    </h2> 
						<p class="text-neutral-500 line-clamp-2">If you want to review the code/snippets I wrote, you can check out my Github profile.</p>
					</div>
				</div>
			</div>
			<div class="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
				<div class="flex justify-between items-center w-full">
					<div class="flex justify-center items-center h-[26px]"></div>
					<div>
						<h2 class="font-medium truncate dark:text-neutral-100">
      Discord
    </h2> 
						<p class="text-neutral-500 line-clamp-2">I am the founder and developer of the community called TeamMagnet.</p>
					</div>
				</div>
			</div>
		</div>
</div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Repositories</p>
        <p className="text-xl text-white/50 font-normal">My open source codes on Github.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {_repositories ? (
            repositories ? (
              repositories.sort((a, b) => b.stargazers_count - a.stargazers_count).map((_, __) => (
                <a key={__} href={`https://github.com/${_.full_name}`} target="_blank" rel="noreferrer" className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <p className="text-md text-red-500">{_.full_name}</p>

                  <div className="flex justify-between w-full mt-2">
                    <p className="font-medium">Stars:</p>
                    <p>{_.stargazers_count}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-medium">Forks:</p>
                    <p>{_.forks}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="font-medium">Language:</p>
                    <p>{_.language}</p>
                  </div>
                </a>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-4 rounded-lg w-full">
                  <div className="bg-neutral-700/30 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                  <div className="flex justify-between w-full mt-2 space-x-4">
                    <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/10 p-4 rounded-lg w-full">
                <div className="bg-neutral-700/30 animate-pulse w-full h-[28px] rounded-md" />
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
                <div className="flex justify-between w-full mt-2 space-x-4">
                  <div className="bg-neutral-700/30 animate-pulse w-24 h-[24px] rounded-md" />
                  <div className="bg-neutral-700/30 animate-pulse w-12 h-[24px] rounded-md" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Technologies I use</p>
        <p className="text-xl text-white/50 font-normal">The technologies I use are listed here.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_technologies ? (
            technologies ? (
              technologies.map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-2 px-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center h-[26px]">
                      <img alt="PonyX" src={_.src} className="rounded-md" width="24" height="24" style={{ fill: '#fff!important;' }} />
                    </div>
                    <p className="text-md font-semibold">{_.name}</p>
                  </div>
                </div>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, __) => (
                <div key={__} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px]">
                      <div className="bg-neutral-700/30 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-neutral-700/30 w-44 h-[36px] rounded-md animate-pulse" />
                  </div>
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, __) => (
              <div key={__} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex-shrink-0 w-[36px] h-[36px]">
                    <div className="bg-neutral-700/30 w-[36px] h-[36px] rounded-md animate-pulse" />
                  </div>
                  <div className="bg-neutral-700/30 w-44 h-[36px] rounded-md animate-pulse" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
