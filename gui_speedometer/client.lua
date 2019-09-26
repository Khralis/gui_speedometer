local show_hud = true;

Citizen.CreateThread(function()
  while true do
  Wait(1)
  if IsControlJustPressed(1, 305) then
    if show_hud then
      show_hud = false
    else
      show_hud = true
      end end
      playerPed = GetPlayerPed(-1)
      if playerPed then
        playerCar = GetVehiclePedIsIn(playerPed, false)
        if playerCar and GetPedInVehicleSeat(playerCar, - 1) == playerPed then
          carSpeed = GetEntitySpeed(playerCar)
          if (carSpeed > 0.0) and show_hud then
            hash = GetEntityModel(playerCar)
            speed = GetVehicleMaxSpeed(hash)
            ms = (speed * 2.23693629)
            mph = math.ceil(carSpeed * 2.236936)
            kmh = math.ceil(carSpeed * 3.6)
            SendNUIMessage({
              showhud = true,
              dBL1 = mph,
              dBL2 = kmh,
              dBL3 = ms,
              uL1 = "MPH",
              uL2 = "KM/H",
              mph = mph,
              kmh = kmh,
              ms = ms,
            })
          else
            SendNUIMessage({showhud = false})
          end
        end
      end
    end
  end)
